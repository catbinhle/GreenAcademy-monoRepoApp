import React, { useState } from 'react';
import { View, Text, Animated, TouchableOpacity, Easing} from 'react-native'
import styles from './styles';

export const MoveAnimationScreen = () => {
    const position = new Animated.ValueXY({x: -150, y: 300})
    const position2 = new Animated.ValueXY({x: 0, y: 0})
    const FadeInView = () => (
        <Animated.Image                
        style={{
            position: 'absolute',
            width: 100, 
            height: 100, 
            resizeMode: 'contain',
            transform: [{ translateX: position.x}, {translateY: position.y}],
        }}
        source={require('../../../assets/bird.png')}
      />
    )
    const FadeInView2 = () => (
        <Animated.Image                
        style={{
            position: 'absolute',
            width: 100, 
            height: 100, 
            resizeMode: 'contain',
            transform: [{ translateX: position2.x}, {translateY: position2.y}],
        }}
        source={require('../../../assets/bird.png')}
      />
    )

    return (
        <View style={styles.container}>
            <View style={styles.subView}>
                <FadeInView />
                <FadeInView2 />
            </View>
            <View style={styles.subView}>
                <TouchableOpacity 
                    style={{height: 44, margin: 20, backgroundColor: 'powderblue'}}
                    onPress={() => {
                        // Animated.timing(
                        //     position,
                        //     {
                        //       toValue: {x: 0, y: -200},
                        //       duration: 5000,
                        //       easing: Easing.bounce
                        //     }
                        //   ).start();
                        // Animated.decay(position, {
                        //     // coast to a stop
                        //     velocity: {x: 40, y: -20 }, // velocity from gesture release
                        //     deceleration: 0.1,
                        // }).start();
                        /////********* Dùng sequence cho chuỗi animation tuầnn tự 
                        // Animated.sequence([
                        //     Animated.timing(
                        //         position,
                        //         {
                        //           toValue: {x: -150, y: 0},
                        //           duration: 5000,
                        //         }
                        //     ),
                        //     Animated.timing(
                        //         position,
                        //         {
                        //           toValue: {x: 0, y: 0},
                        //           duration: 1000,
                        //         }
                        //     ),
                        //     // Animated.decay(position, {
                        //     //     // coast to a stop
                        //     //     velocity: {x: 20, y: 0 }, // velocity from gesture release
                        //     //     deceleration: 0.1,
                        //     // })
                            
                        //   ]).start();

                          /////********* Dùng parallel cho chuỗi animation đồng thời                        
                        // Animated.parallel([
                        //     Animated.sequence([
                        //         Animated.timing(
                        //             position,
                        //             {
                        //               toValue: {x: -150, y: 0},
                        //               duration: 5000,
                        //             }
                        //         ),
                        //         Animated.timing(
                        //             position,
                        //             {
                        //               toValue: {x: 0, y: -150},
                        //               duration: 5000,
                        //             }
                        //         ),
                        //     ]),
                        //     Animated.timing(
                        //         position2,
                        //         {
                        //           toValue: {x: 0, y: 0},
                        //           duration: 1000,
                        //         }
                        //     ),
                        //     // Animated.decay(position, {
                        //     //     // coast to a stop
                        //     //     velocity: {x: 20, y: 0 }, // velocity from gesture release
                        //     //     deceleration: 0.1,
                        //     // })
                            
                        //   ]).start();
                        Animated.sequence([
                            Animated.spring(
                                position,
                                {
                                  toValue: {x: 0, y: 0},
                                  duration: 1000,
                                  friction: 0

                                }
                            ),
                            Animated.parallel([
                                Animated.spring(
                                    position,
                                    {
                                      toValue: {x: 0, y: -200},
                                      duration: 5000,
                                    }
                                ),
                                Animated.spring(
                                    position2,
                                    {
                                        
                                      toValue: {x: 0, y: -150},
                                      duration: 5000,
                                    }
                                ),
                            ]),
                          ]).start();
                        
                    }}
                >
                    <Text>Click</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};