import React, { useState } from 'react';
import { View, Text, Animated, TouchableOpacity} from 'react-native'
import styles from './styles';

export const MoveAnimationScreen = () => {
    const positionY = new Animated.Value(-200)
    const FadeInView = () => (
        <Animated.Image                
        style={{
            width: 100, 
            height: 100, 
            resizeMode: 'contain',
            transform: [{ translateX: 0}, {translateY: positionY}],
        }}
        source={require('../../../assets/bird.png')}
      />
    )

    return (
        <View style={styles.container}>
            <View style={styles.subView}>
                <FadeInView />
            </View>
            <View style={styles.subView}>
                <TouchableOpacity 
                    style={{height: 44, margin: 20, backgroundColor: 'powderblue'}}
                    onPress={() => {
                        Animated.timing(
                            positionY,
                            {
                              toValue: 0,
                              duration: 5000,
                            }
                          ).start();
                    }}
                >
                    <Text>Click</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};