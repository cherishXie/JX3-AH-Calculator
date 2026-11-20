import { useEffect, useRef, useState } from 'react';
import { View, Text, Ad } from '@tarojs/components';
import Taro from '@tarojs/taro';
import withTheme from '../../components/withTheme';
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
    <View className='guide-page'>
      <View className='guide-skip' onClick={enter}>
        <Text>跳过</Text>
        <Text className='guide-skip-count'>{left}s</Text>
      </View>

      <View className='guide-main'>
        <View className='guide-seal'>精</View>
        <Text className='guide-title'>精力做什么</Text>
        <Text className='guide-sub'>剑网3 · 苍生铸世 50 级</Text>
        <Text className='guide-desc'>按本服物价计算生活技艺、五行石与突破收益，帮你决定今天精力花在哪。</Text>

        <View className='guide-points'>
          <View className='guide-point'><Text className='guide-dot' /><Text>本服价格校准 · 云端行情</Text></View>
          <View className='guide-point'><Text className='guide-dot' /><Text>五行石 / 突破 / 配方收益</Text></View>
          <View className='guide-point'><Text className='guide-dot' /><Text>物价走势与历史节点</Text></View>
        </View>

        {GUIDE_AD_ENABLED && GUIDE_AD_UNIT_ID ? (
          <View className='guide-ad'>
            <Ad unitId={GUIDE_AD_UNIT_ID} adType='banner' adTheme='white' />
          </View>
        ) : null}
      </View>

      <View className='guide-foot'>
        <Text className='guide-tip'>数据仅保存在本机 · 不收集个人信息</Text>
        <View className='guide-enter' onClick={enter}>
          <Text>先逛逛</Text>
          <Text className='guide-enter-arrow'>›</Text>
        </View>
      </View>
    </View>
  );
}

export default withTheme(Guide);
