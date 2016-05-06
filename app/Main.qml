import QtQuick 2.4
import Ubuntu.Components 1.3

import "database.js" as Scripts

/*!
    \brief MainView with a Label and Button elements.
*/

MainView {
    // objectName for functional testing purposes (autopilot-qt5)
    objectName: "mainView"

    // Note! applicationName needs to match the "name" field of the click manifest
    applicationName: "wayfinder-bgtools.vagueentertainment"

    width: units.gu(100)
    height: units.gu(75)

    property string beastname: ""

    Page {
        header: PageHeader {
            id: pageHeader
            title: i18n.tr("WayFinder-bgtools")
            StyleHints {
                foregroundColor: UbuntuColors.orange
                backgroundColor: UbuntuColors.porcelain
                dividerColor: UbuntuColors.slate
            }
        }

        Label {
            id: label
            objectName: "label"
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: pageHeader.bottom
                topMargin: units.gu(2)
            }

            text: i18n.tr("Hello..")
        }

        Button {
            objectName: "button"
            id:button1
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: label.bottom
                topMargin: units.gu(2)
            }
            width: parent.width
            text: i18n.tr("Armor")
            onClicked: {
                label.text = i18n.tr("Armor!")
                Scripts.get_armor("http://paizo.com/pathfinderRPG/prd/ultimateEquipment/armsAndArmor/armor.html")
            }
        }

        Button {
            objectName: "button"
            id:button2
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: button1.bottom
                topMargin: units.gu(2)
            }
            width: parent.width
            text: i18n.tr("Weapons")
            onClicked: {
                label.text = i18n.tr("Weapons!")
                Scripts.get_weapons("http://paizo.com/pathfinderRPG/prd/ultimateEquipment/armsAndArmor/weapons.html")
            }
        }

        Button {
            objectName: "button"
            id:button3
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: button2.bottom
                topMargin: units.gu(2)
            }
            width: parent.width
            text: i18n.tr("Items")
            onClicked: {
                label.text = i18n.tr("Items!")
                 Scripts.get_items("http://paizo.com/pathfinderRPG/prd/ultimateEquipment/gear/adventuringGear.html",1);
                 Scripts.get_items("http://paizo.com/pathfinderRPG/prd/ultimateEquipment/gear/toolsAndSkillKits.html",2);
                 Scripts.get_items("http://paizo.com/pathfinderRPG/prd/ultimateEquipment/gear/animalsAndTransports.html",3);
                 Scripts.get_items("http://paizo.com/pathfinderRPG/prd/ultimateEquipment/gear/clothing.html",4);
                 Scripts.get_items("http://paizo.com/pathfinderRPG/prd/ultimateEquipment/gear/entertainmentAndTradeGoods.html",5);
                 Scripts.get_items("http://paizo.com/pathfinderRPG/prd/ultimateEquipment/gear/foodAndDrink.html",6);
                 Scripts.get_items("http://paizo.com/pathfinderRPG/prd/ultimateEquipment/gear/lodgingAndServices.html",7);
            }
        }

        Button {
            objectName: "button"
            id:button4
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: button3.bottom
                topMargin: units.gu(2)
            }
            width: parent.width
            text: i18n.tr("Beasts")
            onClicked: {
                label.text = beastname
                Scripts.get_Bestiary("http://paizo.com/pathfinderRPG/prd/indices/bestiary.html")
                //Scripts.get_Bestiary("http://paizo.com/pathfinderRPG/prd/bestiary/monsterIndex.html")
            }
        }

    }
}

