import React, { useEffect, useState } from "react";
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
  SwitchField,
  Alert,
} from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
import { UserInfo } from "../models";

const Profile = ({ user }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      const uInfo = await DataStore.query(UserInfo, (u) =>
        u.email("beginsWith", user.attributes.email)
      );
      setUserInfo(uInfo);
    };
    getUserInfo();
  }, [user.attributes.email]);

  return (
    <View padding="30px 60px">
      <Tabs>
        <TabItem title="Profile">
          <ProfileSettings user={user} userInfo={userInfo[0]} />
        </TabItem>
        <TabItem title="Alerts">
          <AlertSettings
            user={user}
            userInfo={userInfo[0]}
            setUserInfo={setUserInfo}
          />
        </TabItem>
      </Tabs>
    </View>
  );
};

const ProfileSettings = ({ user, userInfo }) => {
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
          <option value="Amazon">Amazon</option>
          <option value="Apple">Apple</option>
          <option value="Google">Google</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Uber">Uber</option>
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
          <option value="Africa">Africa</option>
          <option value="Asia Pacific">Asia Pacific</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
        </SelectField>
      </Flex>
      <Button
        gap="0.2rem"
        isFullWidth={false}
        variation="primary"
        alignSelf={"flex-end"}
        size="small"
      >
        <IconSave /> Save
      </Button>
    </Flex>
  );
};

const AlertSettings = ({ user, userInfo, setUserInfo }) => {
  const [alerts, setAlerts] = useState(userInfo.alert);
  const [showAlert, setShowAlert] = useState(false);

  const handleSwitch = (field) => {
    setAlerts({ ...alerts, [field]: !alerts[field] });
  };

  const handleSave = async () => {
    await DataStore.save(
      UserInfo.copyOf(userInfo, (item) => {
        item.alert = alerts;
      })
    );
    const uInfo = await DataStore.query(UserInfo, (u) =>
      u.email("beginsWith", user.attributes.email)
    );
    setUserInfo(uInfo);
    setShowAlert(true);
  };

  return (
    <Flex padding="30px 30px" width="50%" direction="column">
      {showAlert ? (
        <Alert
          variation="success"
          isDismissible={true}
          onDismiss={() => setShowAlert(false)}
        >
          Saved!
        </Alert>
      ) : (
        <></>
      )}
      <Text alignSelf={"flex-start"} fontStyle="italic">
        Recieve email alerts for...
      </Text>
      <Flex alignItems={"center"} justifyContent="space-between">
        <Heading>Opportunity Posted [Your Region]</Heading>
        <SwitchField
          size="large"
          defaultChecked={alerts.op_yr}
          onChange={() => handleSwitch("op_yr")}
        />
      </Flex>
      <Flex alignItems={"center"} justifyContent="space-between">
        <Heading>Opportunity Requested [Your Region]</Heading>
        <SwitchField
          size="large"
          defaultChecked={alerts.or_yr}
          onChange={() => handleSwitch("or_yr")}
        />
      </Flex>
      <Flex alignItems={"center"} justifyContent="space-between">
        <Heading>Opportunity Requested [Your Organization]</Heading>
        <SwitchField
          size="large"
          defaultChecked={alerts.or_yo}
          onChange={() => handleSwitch("or_yo")}
        />
      </Flex>
      <Button
        gap="0.2rem"
        isFullWidth={false}
        variation="primary"
        alignSelf={"flex-end"}
        size="small"
        onClick={() => handleSave()}
      >
        <IconSave /> Save
      </Button>
    </Flex>
  );
};

export default Profile;
