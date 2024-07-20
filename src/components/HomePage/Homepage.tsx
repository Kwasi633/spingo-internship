import { View, Text, ScrollView, useWindowDimensions, Image} from 'react-native'
import React from 'react'
import homepageStyles from './HomePageStyles'
import AppButton from '../AppButton/AppButton';

import IndomieImg from '../../images/indomie.jpg'
import RiceImg from '../../images/rice.jpg'
import SpaghettiImg from '../../images/spaghetti.png'
import Straw from '../../icons/strawberry.png'
import dots from '../../icons/3dots.png'
import Edit from '../../icons/edit-2.png'
import Delete from '../../icons/delete.png' 
import Export from '../../icons/export.png'
import Share from '../../icons/share.png'
import Dup from '../../icons/duplicate.png'
import Supplier from '../../icons/frame.png'
import History from '../../icons/history.png'

const Homepage = () => {
  const dimensions = useWindowDimensions();
  const styles = homepageStyles(dimensions);


  return (
    <View style={{flex: 1}}>
    <View style={{height: 40}}>
    <ScrollView horizontal={true} contentContainerStyle={{ alignItems: 'center' }} sc>
      <Text style={styles.scrolText}>Canned Goods</Text>
      <Text style={styles.scrolText}>Grain and Pasta</Text>
      <Text style={styles.scrolText}>Frozen Food</Text>
      <Text style={styles.scrolText}>Canned Goods</Text>
      <Text style={styles.scrolText}>Baby Products</Text>
      <Text style={styles.scrolText}>General Goods</Text>
      <Text style={styles.scrolText}>Grocery</Text>
      <Text style={styles.scrolText}>Stationery</Text>
      </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
      <AppButton
         backgroundColor={'#CCEBFF'}
         color={'#00A6FB'}
         width={dimensions.width * 0.3}
         height={dimensions.height * 0.065}
         marginBottom={dimensions.height * 0.01}
        >All Stocks</AppButton>

        <AppButton
         backgroundColor={'#00A6FB'}
         color={'#FFFFFF'}
         width={dimensions.width * 0.3}
         height={dimensions.height * 0.065}
         marginBottom={dimensions.height * 0.01}
         >Low stock</AppButton>

        <AppButton
         backgroundColor={'#00A6FB'}
         color={'#FFFFFF'}
         width={dimensions.width * 0.3}
         height={dimensions.height * 0.065}
         marginBottom={dimensions.height * 0.01}
         >Expired</AppButton>
    </View>
      

    <View style={styles.itemBox}>
    <View style={styles.itemCircle}>
    <Image 
    style={styles.imgItem}
    source={IndomieImg}/>
    </View>
    
    <View style={styles.itemDescription}>

    <View style={styles.itemName}>
    <Image source={Straw} />
    <Text style={styles.itemText}>Noodles</Text>
    </View>

    <View style={styles.itemName}>
    <Text style={styles.itemPriceText}>per price</Text>
    
    <AppButton
         backgroundColor={'#E3E3E3'}
         color={'#000'}
         width={dimensions.width * 0.15}
         height={dimensions.height * 0.03}
         >₦ 200</AppButton>
    </View>
    
    </View>
    <AppButton
         backgroundColor={'#CCEBFF'}
         color={'#000'}
         width={dimensions.width * 0.28}
         height={dimensions.height * 0.04}
         right={20}
         marginTop={30}
         >Indomie
    </AppButton>

    <Image style={{marginTop: 35, right: 10}}source={dots}/>

    </View>
     
    <View style={styles.itemBox}>
    <View style={styles.itemCircle}>
    <Image 
    style={styles.imgItem}
    source={RiceImg}/>
    </View>

    <View style={styles.itemDescription}>

<View style={styles.itemName}>
<Image source={Straw} />
<Text style={styles.itemText}>Rice</Text>
</View>

<View style={styles.itemName}>
<Text style={styles.itemPriceText}>per price</Text>

<AppButton
     backgroundColor={'#E3E3E3'}
     color={'#000'}
     width={dimensions.width * 0.15}
     height={dimensions.height * 0.03}
     >₦ 200</AppButton>
</View>

</View>
<AppButton
     backgroundColor={'#E3E3E3'}
     color={'#000'}
     width={dimensions.width * 0.28}
     height={dimensions.height * 0.04}
     right={20}
     marginTop={30}
     >Multiple Brands
</AppButton>
    
    <Image style={{marginTop: 35, right: 10}}source={dots}/>

    </View>

    <View style={styles.itemBox}>
    <View style={styles.itemCircle}>
    <Image 
    style={styles.imgItem}
    source={SpaghettiImg}/>
    </View>

    <View style={styles.itemDescription}>

<View style={styles.itemName}>
<Image source={Straw} />
<Text style={styles.itemText}>Spaghetti</Text>
</View>

<View style={styles.itemName}>
<Text style={styles.itemPriceText}>per price</Text>

<AppButton
     backgroundColor={'#E3E3E3'}
     color={'#000'}
     width={dimensions.width * 0.15}
     height={dimensions.height * 0.03}
     >₦ 200
  </AppButton>
  
</View>

</View>
<AppButton
     backgroundColor={'#E3E3E3'}
     color={'#000'}
     width={dimensions.width * 0.28}
     height={dimensions.height * 0.04}
     right={20}
     marginTop={30}
     >Multiple Brands
</AppButton>
<Image style={{marginTop: 35, right: 10}}source={dots}/>
    </View>

    <View style={styles.itemBox}>
    <View style={styles.itemCircle}>
    <Image 
    style={styles.imgItem}
    source={IndomieImg}/>
    </View>

    <View style={styles.itemDescription}>

<View style={styles.itemName}>
<Image source={Straw} />
<Text style={styles.itemText}>Toothpaste</Text>
</View>

<View style={styles.itemName}>
<Text style={styles.itemPriceText}>per price</Text>

<AppButton
     backgroundColor={'#E3E3E3'}
     color={'#000'}
     width={dimensions.width * 0.15}
     height={dimensions.height * 0.03}
     >₦ 200</AppButton>
</View>

</View>
<AppButton
     backgroundColor={'#E3E3E3'}
     color={'#000'}
     width={dimensions.width * 0.28}
     height={dimensions.height * 0.04}
     marginTop={30}
     right={20}
     >Multiple Brands
</AppButton>

<Image style={{marginTop: 35, right: 10}}source={dots}/>
    </View>

    
    <AppButton
         backgroundColor={'#00A6FB'}
         color={'#FFFFFF'}
         width={dimensions.width * 0.27}
         height={dimensions.height * 0.065}
         left={280}
         marginTop={600}
         position='absolute'
         >+ {' '}New</AppButton>


<View style={styles.optionBox}>
    <View style={styles.option}>
      <Image source={Edit} style={{marginLeft: 10}}/>
      <Text style={styles.optionText}>Edit Stock</Text>
    </View>
    <View style={styles.option}>
    <Image source={Supplier} style={{marginLeft: 10}}/>
    <Text style={styles.optionText}>Supplier</Text>
    </View>
    <View style={styles.option}>
    <Image source={Export} style={{marginLeft: 10}}/>
    <Text style={styles.optionText}>Export</Text>
    </View>
    <View style={styles.option}>
    <Image source={Dup} style={{marginLeft: 10}}/>
    <Text style={styles.optionText}>Duplicate</Text>
    </View>
    <View style={styles.option}>
    <Image source={Share} style={{marginLeft: 10}}/>
    <Text style={styles.optionText}>Share</Text>
    </View>
    <View style={styles.option}>
    <Image source={History} style={{marginLeft: 10}}/>
    <Text style={styles.optionText}>View History</Text>
    </View>
    <View style={styles.option}>
    <Image source={Delete} style={{marginLeft: 10}}/>
    <Text style={styles.optionText}>Delete</Text>
    </View>
</View>

    </View>
  )
}

export default Homepage