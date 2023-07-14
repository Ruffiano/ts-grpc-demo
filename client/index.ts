import allSites from "./all-sites";
import allSiteSections from "./all-sitesections";
import allSiteGroups from "./all-sitegroups";

async function run() {
  
  const sites = await allSites();
  console.log(`\nListing all ${sites.length} sites`);
  for (const site of sites) {
    console.log(site.toString());
  }


  const sitesections = await allSiteSections();
  console.log(`\nListing all ${sitesections.length} site sections`);
  for (const sitesection of sitesections) {
    console.log(sitesection.toString());
  }

  const sitegroups = await allSiteGroups();
  console.log(`\nListing all ${sitegroups.length} site groups`);
  for (const sitegroup of sitegroups) {
    console.log(sitegroup.toString());
  }
}

run();
