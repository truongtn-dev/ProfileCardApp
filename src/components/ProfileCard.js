import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileCard = ({ name, job, avatar }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.job}>{job}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    alignItems: "center",

    // Shadow đẹp hơn
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    backgroundColor: "#e0e0e0",
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1e293b",
  },

  job: {
    marginTop: 4,
    fontSize: 14,
    color: "#64748b",
  },
});

export default ProfileCard;
