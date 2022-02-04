import React from "react";
import {
  Button,
  Divider,
  Flex,
  Heading,
  View,
  Text,
  Tabs,
  TabItem,
  SelectField,
  IconSave,
} from "@aws-amplify/ui-react";

const Profile = ({ user }) => {
  console.log(user);
  return (
    <View padding="30px 60px">
      <Tabs>
        <TabItem title="Profile">
          <ProfileSettings user={user} />
        </TabItem>
        <TabItem title="Alerts">Tab 2 Content</TabItem>
      </Tabs>
    </View>
  );
};

const ProfileSettings = ({ user }) => {
  return (
    <Flex padding="30px 30px" width="50%" direction="column">
      <Flex alignItems={"center"} justifyContent="space-between">
        <Heading>Organization</Heading>
        <SelectField
          label="Organization"
          labelHidden={true}
          placeholder="Please select"
          width="300px"
        >
          <option value="amazon">Amazon</option>
          <option value="apple">Apple</option>
          <option value="google">Google</option>
          <option value="microsoft">Microsoft</option>
          <option value="uber">Uber</option>
        </SelectField>
      </Flex>
      <Flex alignItems={"center"} justifyContent="space-between">
        <Heading>Region</Heading>
        <SelectField
          label="Region"
          labelHidden={true}
          placeholder="Please select"
          width="300px"
        >
          <option value="AF">Africa</option>
          <option value="APAC">Asia Pacific</option>
          <option value="NA">North America</option>
          <option value="SA">South America</option>
          <option value="EU">Europe</option>
        </SelectField>
      </Flex>
      <Button
        gap="0.2rem"
        isFullWidth={false}
        variation="primary"
        alignSelf={"flex-end"}
      >
        <IconSave /> Save
      </Button>
    </Flex>
  );
};

export default Profile;
