---
title: Finance Management Mobile App
repoUrl: 'https://github.com/marco-calderon/finance-app-react-native'
tags:
  - 550220c5-0c8c-488e-a05f-bf4d6515db40
imageUrl: /finance-app-react-native/thumb.jpg
---

![Overview](/finance-app-react-native/1.jpg)

This application is made for managing financial in a more enterprise way for entrepreneurs that want to manage their incomes, expenses, and asset costs while having this information visible at all times in a user friendly way.

It is the implementation of a custom design in React Native, and can run on iOS, Android and the web.

This application was made using React Native and Expo, since this wouldn’t use a lot of native libraries and are expected to run on all platforms without making lots of changes. It uses libraries for modal dialogs, charts (Victory Native) and the internal storage of the device.

It doesn’t include a backend communication, but as the other projects I’ve made, it is structured to have a service that handle the data itself and could be adapted to include different datasources such as external services. It was developed in TypeScript instead of JavaScript to have the benefits of using a typed superset of the language and avoid runtime issues that could led to unexpected bugs.

One of the main goals of this app was to develop an application that is on React Native platform using the least libraries possible. This was due to the possibility to include breaking changes or have divided code for different platforms. While this happened with the charts library (Victory Charts) for developing for the web and for the devices, I was aware of the problems to include external libraries that are not well supported on different platforms or have caveats themselves.

The styling and drivers such as the storage were bare React Native and Expo solutions for example. Although, they offer enough functionality to have it behave like a normal native application with some tradeoffs such as not having a translucent status bar and toolbar on iOS. For this application these obstacles were avoided using other solutions that also made this application available for the web. You can see a live demo of this app here.

```
  export interface RoundedButtonProps {
    color: string;
    size: string;
    type?: string;
    text?: string;
    children?: ReactNode[] | ReactNode | undefined;
    onClick?: Function;
    style?: any;
  }
  
  const RoundedButton = (props: RoundedButtonProps) =&gt; {
    const { color, size, text, onClick, style, type } = props;
  
    return (
      &lt;TouchableOpacity style={[styles.container, style, buttonStyles(color, size, type)]} onPress={() =&gt; onClick &amp;&amp; onClick()}&gt;
        &lt;Text style={[styles.title, textStyles(color, size, type)]}&gt;
          {text}
        &lt;/Text&gt;
      &lt;/TouchableOpacity&gt;
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 25,
      paddingRight: 25,
      borderWidth: 2,
    },
    title: {
      fontSize: 10,
      color: '#fff',
    },
  });
  
  export default RoundedButton;
```

The above screenshot shows an example of how a component looks like in a basic form. It also complies with a common pattern for React applications - Component / Container / Page. It was used in a similar form I’ve used in my Finance Mobile App made with Ionic and Angular. As this offers many benefits of reusability and testeability, it was chosen along with a TypeScript template to ensure that every component has their properties well stablished and therefore help other developers or my future self to understand the code easier and gracefully shows errors on compilation time.

It also uses a CSS-like solution for styling that is bundled with React Native. It resembles CSS, but unlike CSS or even CSS-in-JS libraries, this transforms the code into a readable format accroding to the platform (iOS, Android or Web). As such some properties of CSS are not present here - like box-shadow. But it has representation for specific platforms - on iOS being shadowBlur, shadowOffset, and on Android elevation.

One thing I should mention here is that the usage of Victory Charts for the different platforms led me to explore a functionality of React Native that chooses a file depending on the compilation target - for web, it takes the .web.ts and for other platforms it uses the normal .ts files. This is pretty neat as this solves the problem of having two different libraries according to the target (web or mobile device).
