import React from "react";
import styled from "styled-components/native";
import { users } from "../data/users";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f9ff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #0369a1;
  text-align: center;
  margin: 20px 0;
`;

const ScrollContent = styled.ScrollView`
  padding: 20px;
`;

const Card = styled.View`
  flex-direction: row;
  background-color: white;
  padding: 16px;
  border-radius: 14px;
  margin-bottom: 16px;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 16px;
  background-color: #e5e7eb;
`;

const Info = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #0f172a;
`;

const Job = styled.Text`
  font-size: 14px;
  color: #475569;
  margin-top: 4px;
`;

const StyledScreen = () => {
  return (
    <Container>
      <Title>Styled Components Demo</Title>

      <ScrollContent>
        {users.map((user) => (
          <Card key={user.id}>
            <Avatar source={{ uri: user.avatar }} />
            <Info>
              <Name>{user.name}</Name>
              <Job>{user.job}</Job>
            </Info>
          </Card>
        ))}
      </ScrollContent>
    </Container>
  );
};

export default StyledScreen;
