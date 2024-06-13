import {
  AndroidIcon,
  AppleIcon,
  DartIcon,
  FlutterIcon,
  JavaScriptIcon,
  JetpackComposeIcon,
  KotlinIcon,
  ReactIcon,
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
    case "react":
      return <ReactIcon />;
    case "javascript":
      return <JavaScriptIcon />;
    default:
      return <AndroidIcon />;
  }
};

export default IconMapper;
