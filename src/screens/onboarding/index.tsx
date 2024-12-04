import React, {useState, useCallback} from 'react';
import {
  Linking,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Check} from 'lucide-react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  XStack,
  Input,
  Image,
  YStack,
  SizableText,
  View,
  ScrollView,
  Checkbox,
  Label,
} from 'tamagui';

import {navigate} from 'app/navigationRef';
import {useAppDispatch} from 'app/store/hooks';
import {
  setCurrentRouteName,
  setHideWelcomeScreen,
  setUserInfo,
} from 'app/store/coreReducer';

const Onboarding: React.FC = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [termsAccepted, setIsTermsAccepted] = useState(false);

  const openUrl = () => {
    Linking.openURL('https://www.termsfeed.com/live/e22e8658-4a02-4d07-b82e-704f210179fb');
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(setCurrentRouteName('Onboarding'));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const goToHome = () => {
    dispatch(setUserInfo({name}));
    navigate('Home');
    dispatch(setHideWelcomeScreen(true));
  };

  return (
    <ImageBackground
      style={styles.root}
      source={require('app/assets/images/bg.png')}>
      <View
        style={styles.root}>
        <SafeAreaView style={styles.root}>
          <ScrollView>
            <YStack px={20} f={1} jc="space-between">
              <YStack>
                <XStack ai="center" jc="center" py={20}>
                  <Image source={require('app/assets/images/logo.png')} />
                </XStack>

                {activeStep === 0 && (
                  <YStack gap={20} mt={40}>
                    <SizableText color="#fff" fow="400">
                      The Mercury Car Brand: A Brief Overview
                    </SizableText>
                    <SizableText color="#fff" fow="400">
                      Introduction:
                    </SizableText>
                    <SizableText color="#fff" fow="400">
                      Mercury was a division of the Ford Motor Company,
                      established in 1938 to fill the market gap between the
                      affordable Ford models and the luxury Lincoln vehicles.
                      Known for its stylish design and innovative features,
                      Mercury cars offered a blend of affordability,
                      performance, and comfort. Founding and Early Years: 1938:
                      Ford Motor Company introduces Mercury as a mid-priced
                      brand. First Model: The 1939 Mercury Eight, praised for
                      its design and performance, helped establish the brand's
                      reputation. Golden Era (1950s-1970s): 1950s: Mercury
                      gained popularity with models like the Mercury Monterey
                      and Montclair, featuring distinctive styling and advanced
                      features. 1960s: The introduction of the Mercury Cougar in
                      1967 marked a significant success, appealing to younger
                      buyers and earning the Motor Trend "Car of the Year"
                      award. 1970s: Models like the Mercury Marquis and Capri
                      continued to attract customers despite the challenges
                      posed by the oil crisis. Challenges and Decline
                      (1980s-2000s): 1980s: Mercury faced increased competition
                      and struggled to maintain its unique identity, though
                      models like the Grand Marquis and Sable found niche
                      markets. 1990s: Efforts to rejuvenate the brand with new
                      models had limited success, as sales continued to decline.
                      2000s: Despite introducing new models such as the Mercury
                      Milan and Mariner, the brand struggled with declining
                      market share and identity overlap with Ford. End of
                      Production: 2010: Ford announced the discontinuation of
                      the Mercury brand due to declining sales and a strategic
                      focus on the core Ford and Lincoln brands. Final Model:
                      The last Mercury vehicle, a 2011 Grand Marquis, rolled off
                      the production line in January 2011. Legacy: Mercury is
                      remembered for its contribution to the automotive
                      industry, offering vehicles that combined style,
                      performance, and value. Iconic models like the Mercury
                      Cougar and Grand Marquis left a lasting impact on American
                      car culture, and the brand remains cherished by car
                      enthusiasts and collectors. In summary, Mercury's legacy
                      is one of innovation and elegance, bridging the gap
                      between everyday affordability and luxury. Despite its
                      discontinuation, Mercury's influence on automotive design
                      and mid-market branding endures.
                    </SizableText>
                    <SizableText color="#fff" fow="600">
                      Brief History of Mercury Cars
                    </SizableText>
                    <SizableText color="#fff" fow="400">
                      Founding and Early Years (1938-1950s): 1938: The Mercury
                      brand was introduced by the Ford Motor Company as a
                      mid-priced alternative to bridge the gap between the
                      standard Ford models and the luxury Lincoln line. The
                      first model, the 1939 Mercury Eight, was well-received for
                      its stylish design and performance. 1940s: During World
                      War II, Mercury's production shifted to support the war
                      effort. Post-war, the brand resumed car production with
                      updated versions of the pre-war models, gaining popularity
                      for their affordability and reliability. Golden Era
                      (1950s-1970s): 1950s: Mercury enjoyed a golden era with
                      models like the Mercury Monterey and the Mercury
                      Montclair, known for their distinctive styling and
                      innovative features. The brand capitalized on the growing
                      American automotive market. 1960s: The introduction of the
                      Mercury Cougar in 1967 marked a significant success. The
                      Cougar was a stylish and powerful car that appealed to the
                      younger generation and car enthusiasts, earning Motor
                      Trend's "Car of the Year" award in 1967. 1970s: Mercury
                      expanded its lineup with models like the Mercury Marquis
                      and the Mercury Capri. The brand continued to offer a mix
                      of luxury and performance, but faced challenges due to the
                      oil crisis and changing consumer preferences. Challenges
                      and Decline (1980s-2000s): 1980s: The brand struggled to
                      maintain its identity amid increasing competition and
                      shifts in the automotive market. However, models like the
                      Mercury Grand Marquis and the Mercury Sable found a niche
                      market. 1990s: Mercury attempted to rejuvenate its image
                      with new models and marketing strategies, but faced
                      declining sales and market share. The Ford Motor Company
                      began to scale back Mercury's lineup. 2000s: Despite
                      efforts to revive the brand with models like the Mercury
                      Milan and the Mercury Mariner, sales continued to decline.
                      Mercury's identity became increasingly blurred with Ford's
                      mainstream offerings. End of Production (2010): 2010: Ford
                      announced the discontinuation of the Mercury brand due to
                      consistently declining sales and the need to focus
                      resources on the core Ford and Lincoln brands. The final
                      Mercury vehicle, a 2011 Grand Marquis, was produced in
                      January 2011.
                    </SizableText>

                    <XStack jc="center" ai="center" gap="$4">
                      <Checkbox
                        w={24}
                        h={24}
                        checked={termsAccepted}
                        id="notifications"
                        borderRadius={8}
                        bg="transparent"
                        borderWidth={2}
                        onCheckedChange={() =>
                          setIsTermsAccepted(!termsAccepted)
                        }
                        borderColor="#4C468A">
                        <Checkbox.Indicator>
                          <Check size={16} color="#fff" />
                        </Checkbox.Indicator>
                      </Checkbox>

                      <XStack ai="center" jc="center">
                        <Label htmlFor="notifications" color="#fff">
                          I accept the&nbsp;
                        </Label>
                        <TouchableOpacity onPress={openUrl}>
                          <SizableText fow="600" textDecorationLine="underline">
                            Terms and Conditions
                          </SizableText>
                        </TouchableOpacity>
                      </XStack>
                    </XStack>
                  </YStack>
                )}

                {activeStep === 1 && (
                  <YStack gap={20} mt={40}>
                    <Input
                      h={56}
                      bw={1}
                      borderColor="#3C376C"
                      value={name}
                      br={14}
                      bg="#19172F"
                      color="#fff"
                      placeholder="Garage name..."
                      textAlign="center"
                      placeholderTextColor="#fff"
                      onChangeText={setName}
                    />
                    <SizableText color="#fff" ta="center" fow="400">
                      You can come back to this step later
                    </SizableText>
                  </YStack>
                )}
              </YStack>

              <View mt={40} w="100%" f={1}>
                {activeStep === 0 && (
                  <TouchableOpacity
                    disabled={!termsAccepted}
                    onPress={() => setActiveStep(1)}>
                    <ImageBackground
                      style={[
                        styles.button,
                        termsAccepted ? styles.active : null,
                      ]}
                      resizeMode="contain"
                      source={require('app/assets/images/btn.png')}>
                      <SizableText
                        color="#2E2766"
                        fow="800"
                        fos={36}
                        lineHeight={106}
                        style={styles.textWithShadow}
                        mt={-30}>
                        Next
                      </SizableText>
                    </ImageBackground>
                  </TouchableOpacity>
                )}

                {activeStep === 1 && (
                  <TouchableOpacity
                    disabled={!termsAccepted}
                    onPress={goToHome}>
                    <ImageBackground
                      style={[
                        styles.button,
                        termsAccepted ? styles.active : null,
                      ]}
                      resizeMode="contain"
                      source={require('app/assets/images/btn.png')}>
                      <SizableText
                        fow="800"
                        fos={36}
                        color="#2E2766"
                        lineHeight={106}
                        style={styles.textWithShadow}
                        mt={-30}>
                        Next
                      </SizableText>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
              </View>
            </YStack>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  active: {
    opacity: 1,
  },
  button: {
    width: '100%',
    height: 106,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 1,
  },
});

export default Onboarding;
