import React from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'

import { indexAdd, indexMinus, asyncAdd } from './index.action'
import Count from '../../components/index/main';

import './index.css'

const Index = (props) => {

    return (
      <View className='index'>
        <Count />
      </View>
    );
};


const mapStateToProps = (state) => ({
    singlton: { },
  });
  
const mapDispatchToProps = (dispatch) => ({
  //   startup: () => dispatch(StartupActions.startup()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Index);