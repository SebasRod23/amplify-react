import React from "react";
import {
  Button,
  Divider,
  Flex,
  Heading,
  IconAssignment,
  IconAccountCircle,
  View,
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const history = useNavigate();

  const handleClick = (path) => {
    history(path);
  };
  return (
    <>
      <View>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          padding="10px 25px"
        >
          <Heading level={4}>MLH Network</Heading>
          <Flex gap="20px" alignItems="center">
            <Button variation="link" onClick={() => handleClick("/")}>
              <Flex alignItems="center" justifyContent="space-between">
                Dashboard
                <IconAssignment fontSize="1.5rem" />
              </Flex>
            </Button>
            <Button variation="link" onClick={() => handleClick("/profile")}>
              <Flex alignItems="center" justifyContent="space-between">
                Profile
                <IconAccountCircle fontSize="1.5rem" />
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </View>
      <Divider />
    </>
  );
};

export default AppBar;
