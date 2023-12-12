import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function Nav() {
  return (
    <View style={[styles.flexRow, styles.container]}>
        <View style={styles.flexRow}>
            <TouchableOpacity>
                <Svg height='27' width='27' viewBox="2 2 20 20" >
                    <Path  d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" fill="#ffffff"></Path>
                </Svg>
            </TouchableOpacity>
            <Text style={styles.primary}>Juan</Text>
        </View>
        <View style={styles.flexRow}>
            <TouchableOpacity>
                <Svg width="24" height="24" viewBox="0 0 24 24">
                    <Path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z" fill="#ffffff"></Path>
                </Svg>
                <View style={styles.dot}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRow}>
                <Text style={styles.secondary}>Dispositivo #1</Text>
                <Svg width="24" height="24" viewBox="0 0 24 24">
                    <Path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"  fill="#ffffff"></Path>
                </Svg>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    primary: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '500'
    },
    secondary: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '400'
    },
    dot:{
        width: 8,
        height: 8,
        borderRadius: 10,
        backgroundColor: 'red',
        position: 'absolute',
        left: 15,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    }
});
