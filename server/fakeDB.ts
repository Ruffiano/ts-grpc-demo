import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { AppName, DeviceType, Channel, SiteSection } from "../proto/pb/sitesections_pb";
import { Site } from "../proto/pb/sites_pb";
import { SiteGroup } from "../proto/pb/sitesgroups_pb";

class FakeDatabase {
    private siteSections: SiteSection[];
    private sites: Site[];
    private siteGroups: SiteGroup[];

    constructor() {
        this.siteSections = [];
        this.sites = [];
        this.siteGroups = [];
        this.initializeData();
    }

    private initializeData(): void {
        const app1 = new AppName();
        app1.setAppnameid("app1");
        app1.setName("Application 1");

        const device1 = new DeviceType();
        device1.setDeviceid("device1");
        device1.setDevicename("Device 1");

        const channel1 = new Channel();
        channel1.setChannelid("channel1");
        channel1.setName("Channel 1");

        const siteSection1 = new SiteSection();
        siteSection1.setId("section1");
        siteSection1.setSitesectionname("Site Section 1");
        siteSection1.setAppname(app1);
        siteSection1.setDevice(device1);
        siteSection1.setChannel(channel1);
        siteSection1.setSitesectionid("section1");
        siteSection1.setSiteid("site1");
        const timestamp1 = new Timestamp();
        // timestamp1.setSeconds(Date.now() / 1000);
        siteSection1.setDatecreated(timestamp1);

        const app2 = new AppName();
        app2.setAppnameid("app2");
        app2.setName("Application 2");

        const device2 = new DeviceType();
        device2.setDeviceid("device2");
        device2.setDevicename("Device 2");

        const channel2 = new Channel();
        channel2.setChannelid("channel2");
        channel2.setName("Channel 2");

        const siteSection2 = new SiteSection();
        siteSection2.setId("section2");
        siteSection2.setSitesectionname("Site Section 2");
        siteSection2.setAppname(app2);
        siteSection2.setDevice(device2);
        siteSection2.setChannel(channel2);
        siteSection2.setSitesectionid("section2");
        siteSection2.setSiteid("site2");
        const timestamp2 = new Timestamp();
        // timestamp2.setSeconds(Date.now() / 1000);
        siteSection2.setDatecreated(timestamp2);

        this.siteSections.push(siteSection1, siteSection2);

        const site1 = new Site();
        site1.setId("site1");
        site1.setSitename("Site 1");
        site1.setDevice(device1);
        site1.setSiteid("site1");
        site1.setDatecreated(timestamp1);

        const site2 = new Site();
        site2.setId("site2");
        site2.setSitename("Site 2");
        site2.setDevice(device2);
        site2.setSiteid("site2");
        site2.setDatecreated(timestamp2);

        this.sites.push(site1, site2);

        const siteGroup1 = new SiteGroup();
        siteGroup1.setId("group1");
        siteGroup1.setSitegroupname("Site Group 1");
        siteGroup1.setSitegroupid("group1");
        siteGroup1.setParentsitegroupid("");
        siteGroup1.setDatecreated(timestamp1);

        const siteGroup2 = new SiteGroup();
        siteGroup2.setId("group2");
        siteGroup2.setSitegroupname("Site Group 2");
        siteGroup2.setSitegroupid("group2");
        siteGroup2.setParentsitegroupid("group1");
        siteGroup2.setDatecreated(timestamp2);

        this.siteGroups.push(siteGroup1, siteGroup2);
    }

    getAllSiteSections(): SiteSection[] {
        return this.siteSections;
    }

    getSiteSectionById(id: string): SiteSection | undefined {
        return this.siteSections.find((section) => section.getId() === id);
    }

    createSiteSection(newSection: SiteSection): void {
        this.siteSections.push(newSection);
    }

    getAllSites(): Site[] {
        return this.sites;
    }

    getSiteById(id: string): Site | undefined {
        return this.sites.find((site) => site.getId() === id);
    }

    createSite(newSite: Site): void {
        this.sites.push(newSite);
    }

    getAllSiteGroups(): SiteGroup[] {
        return this.siteGroups;
    }

    getSiteGroupById(id: string): SiteGroup | undefined {
        return this.siteGroups.find((group) => group.getId() === id);
    }

    createSiteGroup(newGroup: SiteGroup): void {
        this.siteGroups.push(newGroup);
    }
}

// Uso de la Fake Database
export const fakeDB = new FakeDatabase();

//#region Tests

// Obtener todas las SiteSections
// const allSiteSections = fakeDB.getAllSiteSections();
// for (const section of allSiteSections) {
//     console.log(section.toObject());
// }

// Obtener una SiteSection por su ID
// const siteSection = fakeDB.getSiteSectionById("section1");
// console.log(siteSection?.toObject());

console.log('-------- Site Sections--------');
// Crear una nueva SiteSection
const newSiteSection = new SiteSection();
newSiteSection.setId("section3");
newSiteSection.setSitesectionname("Site Section 3");

const newApp = new AppName();
newApp.setAppnameid("app3");
newApp.setName("Application 3");
newSiteSection.setAppname(newApp);

const newDevice = new DeviceType();
newDevice.setDeviceid("device3");
newDevice.setDevicename("Device 3");
newSiteSection.setDevice(newDevice);

const newChannel = new Channel();
newChannel.setChannelid("channel3");
newChannel.setName("Channel 3");
newSiteSection.setChannel(newChannel);

newSiteSection.setSitesectionid("section3");
newSiteSection.setSiteid("site3");
const newTimestamp = new Timestamp();
// newTimestamp.setSeconds(Date.now() / 1000);
newSiteSection.setDatecreated(newTimestamp);

fakeDB.createSiteSection(newSiteSection);

// Obtener todas las SiteSections actualizadas
const updatedSiteSections = fakeDB.getAllSiteSections();
for (const section of updatedSiteSections) {
    console.log(section.toObject());
}

console.log('-------- Sites --------');

// // Obtener todos los sitios
// const allSites = fakeDB.getAllSites();
// for (const site of allSites) {
//     console.log(site.toObject());
// }

// // Obtener un sitio por su ID
// const site = fakeDB.getSiteById("site1");
// console.log(site?.toObject());

// Crear un nuevo sitio
const newSite = new Site();
newSite.setId("site3");
newSite.setSitename("Site 3");
newSite.setDevice(newDevice);
newSite.setSiteid("site3");
newSite.setDatecreated(newTimestamp);

fakeDB.createSite(newSite);


// Obtener todos los sitios actualizados
const updatedSites = fakeDB.getAllSites();
for (const site of updatedSites) {
    console.log(site.toObject());
}

// Obtener todos los grupos de sitios
// const allSiteGroups = fakeDB.getAllSiteGroups();
// for (const group of allSiteGroups) {
//     console.log(group.toObject());
// }

// Obtener un grupo de sitio por su ID
// const siteGroup = fakeDB.getSiteGroupById("group1");
// console.log(siteGroup?.toObject());

console.log('-------- Site Groups --------');
// Crear un nuevo grupo de sitio
const newSiteGroup = new SiteGroup();
newSiteGroup.setId("group3");
newSiteGroup.setSitegroupname("Site Group 3");
newSiteGroup.setSitegroupid("group3");
newSiteGroup.setParentsitegroupid("group1");
newSiteGroup.setDatecreated(newTimestamp);

fakeDB.createSiteGroup(newSiteGroup);

// Obtener todos los grupos de sitios actualizados
const updatedSiteGroups = fakeDB.getAllSiteGroups();
for (const group of updatedSiteGroups) {
    console.log(group.toObject());
}

//#endregion Tests
