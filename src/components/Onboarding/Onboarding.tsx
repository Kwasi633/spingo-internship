import { Image,View, Text, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Person from '../../images/person1.png';
import onboardingStyles from './OnboardingStyles';
import Lady from '../../images/person2.png'
import One from '../../icons/01.png'

const imageData = [
    {
        id: 1,
        onboardImage: Person
    },
    {
        id: 2,
        onboardImage: Lady

    }
]


const Onboarding = () => {
    const [screenIndex, setScreenIndex] = useState(0);
  const dimensions = useWindowDimensions();
  const styles = onboardingStyles(dimensions);

  return (
    <View style={styles.container}>
      <Image
      style={styles.person} 
      source={Person} />

<View style={styles.stepIndicatorContainer}>
        {imageData.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              { backgroundColor: index === screenIndex ? '#00A6FB' : '#D3D3D3' },
            ]}
          />
        ))}
      </View>

      <View style={styles.overviewContainer}>
        <View style={styles.numberBox}>
            <Image source={One} />
        </View>

        <View style={styles.onboardText}>
            <Text style={styles.welcomeText}>Welcome to {' '}
                <Text style={styles.spinGoText}>SPINGO!</Text> Your ultimate Business Companion.</Text>
        </View>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>Streamline your business operations and maximize efficiency with our all-in-one platform.</Text>
      </View>
    </View>
  )
}

export default Onboarding;