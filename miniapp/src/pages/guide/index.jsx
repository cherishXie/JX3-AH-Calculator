import { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Ad } from '@tarojs/components';
import Taro from '@tarojs/taro';
import withTheme from '../../components/withTheme';
import launch from '../../assets/launch-default.jpg';
import {
  GUIDE_ENABLED, GUIDE_TARGET, GUIDE_AD_ENABLED, GUIDE_AD_UNIT_ID, guideSeconds
} from '../../shared/guideConfig';

function Guide() {
  const seconds = guideSeconds();
  const [left, setLeft] = useState(seconds);
  const entered = useRef(false);
  const timer = useRef(null);

  function enter() {
    if (entered.current) return;
    entered.current = true;
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    Taro.switchTab({
      url: GUIDE_TARGET,
      fail: function () {
        Taro.reLaunch({ url: GUIDE_TARGET });
      }
    });
  }

  useEffect(function () {
    if (!GUIDE_ENABLED) {
      enter();
      return function () {};
    }

    let remaining = seconds;
    timer.current = setInterval(function () {
      remaining -= 1;
      if (remaining <= 0) {
        if (timer.current) {
          clearInterval(timer.current);
          timer.current = null;
        }
        setLeft(0);
        enter();
      } else {
        setLeft(remaining);
      }
    }, 1000);

    return function () {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };
  }, []);

  return (
    <View className='guide-page guide-launch'>
      <Image className='guide-launch-img' src={launch} mode='aspectFit' />
      <View className='guide-launch-shade' />

      <View className='guide-launch-panel'>
        <Text className='guide-launch-line'>物价走势 · 区服趋势 · 突破升级</Text>
        <Text className='guide-launch-tip'>按本服物价算清生活技艺与五行石收益 · 数据仅存本机</Text>

        {GUIDE_AD_ENABLED && GUIDE_AD_UNIT_ID ? (
          <View className='guide-launch-ad'>
            <Ad unitId={GUIDE_AD_UNIT_ID} adType='banner' adTheme='white' />
          </View>
        ) : null}

        <View className='guide-launch-go' onClick={enter}>
          <Text>进入小程序</Text>
          <Text className='guide-launch-count'>{left > 0 ? left + 's' : '›'}</Text>
        </View>
      </View>
    </View>
  );
}

export default withTheme(Guide);
