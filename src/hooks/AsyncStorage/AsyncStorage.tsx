import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageHook = () => {
  // For string value
  const setString = async (dataKey: string, value: string) => {
    try {
      await AsyncStorage.setItem(dataKey, value);
      return true;
    } catch (error) {
      return false;
    }
  };

  const getString = async (dataKey: string) => {
    try {
      let value = await AsyncStorage.getItem(dataKey);
      if (value && value != null) {
        return value;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  // For boolean and objects value
  const set = async (dataKey: string, value: boolean) => {
    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  };

  const get = async (dataKey: string) => {
    try {
      var value = await AsyncStorage.getItem(dataKey);
      if (value && value != null) {
        return JSON.parse(value);
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  // For removing key and its stored values
  const remove = async (dataKey: string) => {
    try {
      await AsyncStorage.removeItem(dataKey);
      return true;
    } catch (error) {
      return false;
    }
  };

  return {setString, getString, set, get, remove} as const;
};

export {AsyncStorageHook};
