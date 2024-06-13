import {
  AndroidIcon,
  AppleIcon,
  DartIcon,
  FlutterIcon,
  JetpackComposeIcon,
  KotlinIcon,
} from ".";

const IconMapper = (tag) => {
  switch (tag) {
    case "android":
      return <AndroidIcon />;
    case "jetpack compose":
      return <JetpackComposeIcon />;
    case "kotlin":
      return <KotlinIcon />;
    case "flutter":
      return <FlutterIcon />;
    case "dart":
      return <DartIcon />;
    case "apple":
      return <AppleIcon />;
    default:
      return <AndroidIcon />;
  }
};

export default IconMapper;
