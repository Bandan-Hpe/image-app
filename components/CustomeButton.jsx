import { Text, TouchableOpacity } from "react-native";

const CustomeButton = ({
  title,
  handlePress,
  containerStyles,
  TextStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text className={`text-primary text-lg font-bold ${TextStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomeButton;
