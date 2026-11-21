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
          <Text className='s'>1→50 最优路线</Text>
          <Text className='meta'>8 项技艺</Text>
        </View>
        <Text className='chev'>›</Text>
      </View>

      <DataNote />
    </View>
  );
}

export default withTheme(Analysis);
