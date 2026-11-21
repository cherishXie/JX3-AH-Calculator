import withTheme from '../../components/withTheme';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import ServerBar from '../../components/ServerBar';
import DataNote from '../../components/DataNote';
import TrendMini from '../../components/TrendMini';
import ServerTrendMini from '../../components/ServerTrendMini';

const IS_WEAPP = process.env.TARO_ENV === 'weapp';

function Analysis() {
  return (
    <View className='page'>
      <ServerBar />

      <View className='analysis-intro'>
        <Text className='t'>看行情，也看趋势</Text>
        <Text className='s'>本服价格决定今天做什么，跨服涨跌决定什么时候做、去哪儿买。</Text>
      </View>

      {IS_WEAPP ? (
        <View>
          <TrendMini />
          <ServerTrendMini />
        </View>
      ) : null}

      <View className='card analysis-card' onClick={function () { Taro.navigateTo({ url: '/pages/breakthrough/index' }); }}>
        <View className='analysis-ic green'>升</View>
        <View className='main'>
          <Text className='t'>突破升级</Text>
          <Text className='s'>1→50 最优冲级路线、晋秩门槛与每段收益</Text>
          <Text className='meta'>8 项生活技艺 · 金币 / 精力 / 省心</Text>
        </View>
        <Text className='chev'>›</Text>
      </View>

      <DataNote extra='趋势数据来自云端历史或包内离线快照' />
    </View>
  );
}

export default withTheme(Analysis);
