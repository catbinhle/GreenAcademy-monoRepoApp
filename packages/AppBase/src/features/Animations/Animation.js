import React, { useRef } from 'react';
import { View, Text, Animated, TouchableOpacity} from 'react-native'
import styles from './styles';

export const AnimationScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current 
    const FadeInView = () => (
        <Animated.View                
        style={{width: 250, height: 50, backgroundColor: 'powderblue', opacity: fadeAnim}}
      >
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </Animated.View>
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
                            fadeAnim,
                            {
                              toValue: fadeAnim._value > 0 ? 0 : 1,
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