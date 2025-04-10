import React, { useState } from 'react';
import {Image, Text, TouchableOpacity, View,StyleSheet} from "react-native";
import remboImage from '../../assets/img/rembo.png';

const UserCard = ({ user, onPress }) => {
    const [subscribed, setSubscribed] = useState(false);

    const handleToggleSubscribe = () => {
        setSubscribed(prev => !prev);
    };

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.avatar} source={remboImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.lastName}>{user.lastName}</Text>
            </View>
            <TouchableOpacity
                style={[styles.subscribeButton, subscribed ? styles.unsubscribe : styles.subscribe]}
                onPress={handleToggleSubscribe}
            >
                <Text style={styles.subscribeText}>
                    {subscribed ? 'Unsubscribe' : 'Subscribe'}
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        shadowColor: '#000',
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    lastName: {
        fontSize: 12,
        color: '#888',
    },
    subscribeButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16,
    },
    subscribe: {
        backgroundColor: '#007bff',
    },
    unsubscribe: {
        backgroundColor: '#ff4d4d',
    },
    subscribeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
});

export default UserCard;


