import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import ProfileCard from "../components/ProfileCard";
import { users } from "../data/users";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Danh sách nhân sự</Text>
        <Text style={styles.subtitle}>Demo Flexbox & StyleSheet</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            job={user.job}
            avatar={user.avatar}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  header: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#64748b",
  },

  content: {
    padding: 20,
  },
});

export default HomeScreen;
