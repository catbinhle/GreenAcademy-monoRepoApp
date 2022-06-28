import React, {Component} from "react"
import {View, Text, Image, TouchableOpacity, FlatList, AppRegistry} from 'react-native'
import styles from "./styles"
// import { bindActionCreators } from 'redux' 
// import { connect } from 'react-redux' 
// import { getHomeList } from '../../actions/HomeActions' 

class Home extends Component {
    constructor(props) {
        super(props)
    }

    state = {}

    goScreen = (item) => {
        this.props.navigation.navigate('DetailCity', item)
    }

    componentDidMount() {
        // const {userInfo} = this.props.app //***** Dùng app từ Reducer, lưu ý: phải có this.props
        // console.log('HOME User Info: ', userInfo)
        // if (userInfo?.accessToken) {
        //     new Promise((resolve) =>
        //         setTimeout(
        //             () => { this.props.getHomeList() },
        //             2000
        //         )
        //     )
        // } 
    }

    componentDidUpdate(prevProps) {
        // const {userInfo} = this.props.app //***** Dùng app từ Reducer, lưu ý: phải có this.props
        // if (userInfo !== prevProps?.app?.userInfo && userInfo?.accessToken) {
        //     new Promise((resolve) =>
        //         setTimeout(
        //             () => { this.props.getHomeList() },
        //             5000
        //         )
        //     )
        // }
    }

    // _renderItem = ({item}) => (
    //     <TouchableOpacity 
    //         style={styles.item}
    //         onPress={() => this.goScreen(item)}>
    //         <Image style={styles.image} source={{uri: item?.image}}/>
    //         <View style={styles.opacityInfoView}/>
    //         <View style={styles.infoView}>
    //             <Text style={styles.txtName}>{item?.name}</Text>
    //         </View>
    //     </TouchableOpacity>
    // )

    render() {
        //***** Dùng app và home từ Reducer, lưu ý: phải có this.props
        // const {userInfo} = this.props.app
        // const {homeList} = this.props.home
        return (
            <View style={styles.container}>
                {/* {userInfo?.accessToken ?
                    <FlatList
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        data={homeList}
                        renderItem={this._renderItem}
                        keyExtractor={item => item.id}
                    />
                : 
                    <View style={styles.emptyView}>
                        <Text>Bạn chưa đăng nhập, xin vui lòng đăng nhập</Text>
                        
                    </View>
                } */}
            </View>
        )
    }
}

// const mapDispatchToProps = (dispatch) => (
//     bindActionCreators({
//         getHomeList 
//     }, dispatch)
// )

// const mapStateToProps = state => {
//     const { app, home } = state
//       return { app, home }
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(Home) 

export default Home