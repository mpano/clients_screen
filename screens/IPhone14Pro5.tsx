import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone14Pro5 = () => {
  return (
    <View style={[styles.iphone14Pro5, styles.iphone14Pro5Layout]}>
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout1]}>
          <View style={[styles.groupChild, styles.groupLayout1]} />
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.icbaselineHomeParent}>
            <Image
              style={styles.icbaselineHomeIcon}
              contentFit="cover"
              source={require("../assets/icbaselinehome.png")}
            />
            <Text style={[styles.clients, styles.clientsClr]}>Clients</Text>
          </View>
          <View style={styles.mdifolderTransferParent}>
            <Image
              style={[styles.mdifolderTransferIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mdifoldertransfer.png")}
            />
            <Text style={[styles.requests, styles.itemsTypo]}>Requests</Text>
          </View>
          <View style={styles.mdibellParent}>
            <Image
              style={[styles.mdibellIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/mdibell.png")}
            />
            <Text style={[styles.items, styles.itemsTypo]}>Items</Text>
          </View>
          <View style={styles.mdiuserParent}>
            <Image
              style={[styles.mdiuserIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/mdiuser.png")}
            />
            <Text style={[styles.profile, styles.itemsTypo]}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent, styles.groupParentLayout]}>
          <Image
            style={[styles.ellipseParent, styles.groupParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.ih, styles.ihTypo]}>IH</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.ishemaHubParent, styles.ishemaHubParentLayout]}>
          <Text style={[styles.ishemaHub, styles.ihTypo]}>ISHEMA HUB</Text>
          <Text
            style={[styles.loremIpsumDolor, styles.ishemaHubParentLayout]}
          >{`Lorem ipsum dolor sit amet consectetur. Pulvinar at orci sed congue. Vel arcu bibendum `}</Text>
        </View>
      </View>
      <View style={[styles.groupParent1, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent, styles.groupParentLayout]}>
          <Image
            style={[styles.ellipseParent, styles.groupParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.ih, styles.ihTypo]}>IH</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.ishemaHubParent, styles.ishemaHubParentLayout]}>
          <Text style={[styles.ishemaHub, styles.ihTypo]}>ISHEMA HUB</Text>
          <Text
            style={[styles.loremIpsumDolor, styles.ishemaHubParentLayout]}
          >{`Lorem ipsum dolor sit amet consectetur. Pulvinar at orci sed congue. Vel arcu bibendum `}</Text>
        </View>
      </View>
      <View style={[styles.groupParent2, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent, styles.groupParentLayout]}>
          <Image
            style={[styles.ellipseParent, styles.groupParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.ih, styles.ihTypo]}>IH</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.ishemaHubParent, styles.ishemaHubParentLayout]}>
          <Text style={[styles.ishemaHub, styles.ihTypo]}>ISHEMA HUB</Text>
          <Text
            style={[styles.loremIpsumDolor, styles.ishemaHubParentLayout]}
          >{`Lorem ipsum dolor sit amet consectetur. Pulvinar at orci sed congue. Vel arcu bibendum `}</Text>
        </View>
      </View>
      <View style={[styles.groupParent3, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent, styles.groupParentLayout]}>
          <Image
            style={[styles.ellipseParent, styles.groupParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.ih, styles.ihTypo]}>IH</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.ishemaHubParent, styles.ishemaHubParentLayout]}>
          <Text style={[styles.ishemaHub, styles.ihTypo]}>ISHEMA HUB</Text>
          <Text
            style={[styles.loremIpsumDolor, styles.ishemaHubParentLayout]}
          >{`Lorem ipsum dolor sit amet consectetur. Pulvinar at orci sed congue. Vel arcu bibendum `}</Text>
        </View>
      </View>
      <View style={[styles.groupParent4, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent, styles.groupParentLayout]}>
          <Image
            style={[styles.ellipseParent, styles.groupParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.ih, styles.ihTypo]}>IH</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.ishemaHubParent, styles.ishemaHubParentLayout]}>
          <Text style={[styles.ishemaHub, styles.ihTypo]}>ISHEMA HUB</Text>
          <Text
            style={[styles.loremIpsumDolor, styles.ishemaHubParentLayout]}
          >{`Lorem ipsum dolor sit amet consectetur. Pulvinar at orci sed congue. Vel arcu bibendum `}</Text>
        </View>
      </View>
      <View style={[styles.groupParent5, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent, styles.groupParentLayout]}>
          <Image
            style={[styles.ellipseParent, styles.groupParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.ih, styles.ihTypo]}>IH</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.ishemaHubParent, styles.ishemaHubParentLayout]}>
          <Text style={[styles.ishemaHub, styles.ihTypo]}>ISHEMA HUB</Text>
          <Text
            style={[styles.loremIpsumDolor, styles.ishemaHubParentLayout]}
          >{`Lorem ipsum dolor sit amet consectetur. Pulvinar at orci sed congue. Vel arcu bibendum `}</Text>
        </View>
      </View>
      <View style={[styles.groupParent6, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent, styles.groupParentLayout]}>
          <Image
            style={[styles.ellipseParent, styles.groupParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.ih, styles.ihTypo]}>IH</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.ishemaHubParent, styles.ishemaHubParentLayout]}>
          <Text style={[styles.ishemaHub, styles.ihTypo]}>ISHEMA HUB</Text>
          <Text
            style={[styles.loremIpsumDolor, styles.ishemaHubParentLayout]}
          >{`Lorem ipsum dolor sit amet consectetur. Pulvinar at orci sed congue. Vel arcu bibendum `}</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <View style={styles.groupParent7}>
          <View style={[styles.goodMorningParent, styles.groupChild5Position]}>
            <Text style={[styles.goodMorning, styles.goodMorningTypo]}>
              Good morning
            </Text>
            <Text style={[styles.juniorRurangwa, styles.clientsClr]}>
              Junior Rurangwa
            </Text>
            <Image
              style={[styles.groupChild5, styles.groupChild5Position]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[
                styles.claritynotificationSolidBadIcon,
                styles.iconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/claritynotificationsolidbadged.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild6, styles.groupLayout]} />
            <Image
              style={[styles.vectorIcon7, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Text style={[styles.searchClient, styles.goodMorningTypo]}>
              Search Client...
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone14Pro5Layout: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.white,
  },
  groupLayout1: {
    height: 66,
    width: 393,
    left: 0,
    position: "absolute",
  },
  clientsClr: {
    color: Color.royalblue_100,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 26,
    width: 26,
    position: "absolute",
    overflow: "hidden",
  },
  itemsTypo: {
    color: Color.darkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 4,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupParentLayout: {
    height: 63,
    position: "absolute",
  },
  ihTypo: {
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ishemaHubParentLayout: {
    width: 241,
    position: "absolute",
  },
  rectangleLayout: {
    height: 179,
    width: 393,
    left: 0,
    position: "absolute",
  },
  groupChild5Position: {
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
  },
  goodMorningTypo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 38,
    width: 340,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(135, 166, 182, 0.14)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0,
    backgroundColor: Color.white,
  },
  rectangleWrapper: {
    top: 0,
  },
  icbaselineHomeIcon: {
    left: 5,
    width: 30,
    height: 30,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  clients: {
    top: 34,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.royalblue_100,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  icbaselineHomeParent: {
    top: 2,
    width: 40,
    height: 49,
    left: 0,
    position: "absolute",
  },
  mdifolderTransferIcon: {
    left: 14,
    top: 0,
  },
  requests: {
    top: 32,
  },
  mdifolderTransferParent: {
    top: 4,
    left: 79,
    width: 54,
    height: 47,
    position: "absolute",
  },
  mdibellIcon: {
    width: 24,
    height: 24,
  },
  items: {
    top: 30,
  },
  mdibellParent: {
    left: 182,
    width: 32,
    height: 45,
    top: 5,
    position: "absolute",
  },
  mdiuserIcon: {
    width: 29,
    height: 29,
  },
  profile: {
    top: 33,
  },
  mdiuserParent: {
    left: 263,
    width: 37,
    height: 48,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    top: 8,
    left: 47,
    width: 300,
    height: 51,
    position: "absolute",
  },
  groupParent: {
    top: 786,
  },
  ellipseParent: {
    width: 63,
    top: 0,
    left: 0,
  },
  ih: {
    top: 17,
    left: 19,
    fontSize: FontSize.size_5xl,
    color: Color.white,
  },
  vectorIcon: {
    height: "26.52%",
    width: "2.83%",
    top: "36.51%",
    right: "0%",
    bottom: "36.97%",
    left: "97.17%",
  },
  ishemaHub: {
    fontSize: FontSize.size_base,
    color: Color.dimgray_100,
    top: 0,
    left: 0,
  },
  loremIpsumDolor: {
    top: 24,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.black,
    height: 27,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    left: 0,
  },
  ishemaHubParent: {
    top: 6,
    left: 75,
    height: 51,
  },
  groupView: {
    top: 187,
    width: 340,
    left: 27,
    height: 63,
  },
  groupParent1: {
    top: 269,
    width: 340,
    left: 27,
    height: 63,
  },
  groupParent2: {
    top: 351,
    width: 340,
    left: 27,
    height: 63,
  },
  groupParent3: {
    top: 433,
    width: 340,
    left: 27,
    height: 63,
  },
  groupParent4: {
    top: 515,
    width: 340,
    left: 27,
    height: 63,
  },
  groupParent5: {
    top: 597,
    width: 340,
    left: 27,
    height: 63,
  },
  groupParent6: {
    top: 679,
    width: 340,
    left: 27,
    height: 63,
  },
  rectangleView: {
    top: 0,
    backgroundColor: Color.white,
    borderRadius: Border.br_6xl,
  },
  goodMorning: {
    color: "#525252",
    left: 58,
    top: 5,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  juniorRurangwa: {
    top: 23,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    left: 58,
    textAlign: "left",
  },
  groupChild5: {
    width: 44,
  },
  claritynotificationSolidBadIcon: {
    top: 9,
    left: 310,
  },
  goodMorningParent: {
    width: 336,
  },
  groupChild6: {
    borderRadius: 7,
    backgroundColor: "rgba(26, 116, 226, 0.12)",
    top: 0,
  },
  vectorIcon7: {
    height: "42.1%",
    width: "4.76%",
    top: "31.58%",
    right: "89.88%",
    bottom: "26.32%",
    left: "5.36%",
  },
  searchClient: {
    top: 15,
    left: 49,
    lineHeight: 8,
    color: "#9f9f9f",
    width: 106,
    fontSize: FontSize.size_2xs,
  },
  rectangleGroup: {
    top: 63,
  },
  groupParent7: {
    top: 50,
    left: 28,
    height: 101,
    width: 340,
    position: "absolute",
  },
  rectangleParent: {
    top: -1,
  },
  iphone14Pro5: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro5;
