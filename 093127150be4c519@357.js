function _1(md){return(
md`# Global progress in ocean accounting`
)}

function _d3(require){return(
require("d3@7")
)}

function _topojson(require){return(
require("topojson-client@3")
)}

async function _worldData(d3){return(
await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
)}

function _isoCodeMapping(){return(
{
  "US": "840", "USA": "840",
  "GB": "826", "GBR": "826", 
  "AU": "036", "AUS": "036",
  "CA": "124", "CAN": "124",
  "MX": "484", "MEX": "484",
  "BR": "076", "BRA": "076",
  "AR": "032", "ARG": "032",
  "CL": "152", "CHL": "152",
  "CO": "170", "COL": "170",
  "PE": "604", "PER": "604",
  "VE": "862", "VEN": "862",
  "EC": "218", "ECU": "218",
  "FR": "250", "FRA": "250",
  "DE": "276", "DEU": "276",
  "IT": "380", "ITA": "380",
  "ES": "724", "ESP": "724",
  "PT": "620", "PRT": "620",
  "NL": "528", "NLD": "528",
  "BE": "056", "BEL": "056",
  "CH": "756", "CHE": "756",
  "AT": "040", "AUT": "040",
  "SE": "752", "SWE": "752",
  "NO": "578", "NOR": "578",
  "DK": "208", "DNK": "208",
  "FI": "246", "FIN": "246",
  "IS": "352", "ISL": "352",
  "IE": "372", "IRL": "372",
  "RU": "643", "RUS": "643",
  "CN": "156", "CHN": "156",
  "JP": "392", "JPN": "392",
  "KR": "410", "KOR": "410",
  "IN": "356", "IND": "356",
  "ID": "360", "IDN": "360",
  "MY": "458", "MYS": "458",
  "SG": "702", "SGP": "702",
  "TH": "764", "THA": "764",
  "VN": "704", "VNM": "704",
  "PH": "608", "PHL": "608",
  "NZ": "554", "NZL": "554",
  "ZA": "710", "ZAF": "710",
  "EG": "818", "EGY": "818",
  "MA": "504", "MAR": "504",
  "KE": "404", "KEN": "404",
  "NG": "566", "NGA": "566",
  "ET": "231", "ETH": "231",
  "GH": "288", "GHA": "288",
  "TZ": "834", "TZA": "834",
  "UG": "800", "UGA": "800",
  "ZW": "716", "ZWE": "716",
  "SA": "682", "SAU": "682",
  "AE": "784", "ARE": "784",
  "IL": "376", "ISR": "376",
  "TR": "792", "TUR": "792",
  "PK": "586", "PAK": "586",
  "BD": "050", "BGD": "050",
  "LK": "144", "LKA": "144",
  "MM": "104", "MMR": "104",
  "NP": "524", "NPL": "524",
  // Pacific Islands
  "FJ": "242", "FJI": "242",
  "SB": "090", "SLB": "090",
  "VU": "548", "VUT": "548",
  "NC": "540", "NCL": "540",
  "PF": "258", "PYF": "258",
  "PG": "598", "PNG": "598",
  "WS": "882", "WSM": "882",
  "GU": "316", "GUM": "316",
  "KI": "296", "KIR": "296",
  "FM": "583", "FSM": "583",
  "TO": "776", "TON": "776",
  "PW": "585", "PLW": "585",
  "CK": "184", "COK": "184",
  "NU": "570", "NIU": "570",
  "TV": "798", "TUV": "798",
  "NR": "520", "NRU": "520",
  "MH": "584", "MHL": "584",
  // ADD THESE MISSING COUNTRIES:
  "MOZ": "508", "MOZambique": "508",  // Mozambique
  "MDG": "450", "Madagascar": "450",   // Madagascar  
  "LBR": "430", "Liberia": "430",     // Liberia
  // Caribbean
  "JM": "388", "JAM": "388",
  "CU": "192", "CUB": "192",
  "DO": "214", "DOM": "214",
  "HT": "332", "HTI": "332",
  "BS": "044", "BHS": "044",
  "TT": "780", "TTO": "780",
  "BB": "052", "BRB": "052",
  "LC": "662", "LCA": "662",
  "VC": "670", "VCT": "670",
  "GD": "308", "GRD": "308",
  "AG": "028", "ATG": "028",
  "DM": "212", "DMA": "212",
  "KY": "136", "CYM": "136",
  "BM": "060", "BMU": "060",
  "TC": "796", "TCA": "796",
  "VG": "092", "VGB": "092",
  "AI": "660", "AIA": "660",
  "MS": "500", "MSR": "500",
  // Other countries
  "CR": "188", "CRI": "188",
  "PA": "591", "PAN": "591",
  "HN": "340", "HND": "340",
  "GT": "320", "GTM": "320",
  "SV": "222", "SLV": "222",
  "NI": "558", "NIC": "558",
  "BZ": "084", "BLZ": "084",
  "UY": "858", "URY": "858",
  "PY": "600", "PRY": "600",
  "BO": "068", "BOL": "068",
  "GY": "328", "GUY": "328",
  "SR": "740", "SUR": "740",
  "GF": "254", "GUF": "254",
  "FK": "238", "FLK": "238",
}
)}

function _normalizeISOCode(isoCodeMapping){return(
function normalizeISOCode(code) {
  if (!code) return null;
  code = code.toString().trim().toUpperCase();
  
  // Check if it's already a numeric code
  if (/^\d+$/.test(code)) {
    return code;
  }
  
  // Try to map it
  return isoCodeMapping[code] || code;
}
)}

function _world(topojson,worldData){return(
topojson.feature(worldData, worldData.objects.countries)
)}

async function _rangeData(d3){return(
await d3.csv("https://raw.githubusercontent.com/SustainableDevelopmentReform/ocean-accounts-implementation/main/data/RangeOAimplementation.csv")
)}

function _9(__query,rangeData,invalidation){return(
__query(rangeData,{from:{table:"rangeData"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"rangeData")
)}

function _processedRangeData(rangeData,normalizeISOCode){return(
rangeData.map(d => ({
  ...d,
  OA_Count_disagg: +d.OA_Count_disagg || 0,
  numericId: normalizeISOCode(d.ISO_CC)
})).filter(d => d.ISO_CC && d.ISO_CC !== "N/A" && d.OA_Count_disagg > 0)
)}

function _componentCountFilters(html)
{
  const form = html`<form style="
    font-family: sans-serif;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  ">
    <h3 style="margin: 0 0 15px 0; color: #333;">Filter by Number of Components:</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 15px;">
      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
        <input type="checkbox" name="count" value="1">
        <span style="color: #333;">1 component</span>
      </label>
      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
        <input type="checkbox" name="count" value="2">
        <span style="color: #333;">2 components</span>
      </label>
      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
        <input type="checkbox" name="count" value="3">
        <span style="color: #333;">3 components</span>
      </label>
      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
        <input type="checkbox" name="count" value="4">
        <span style="color: #333;">4 components</span>
      </label>
      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
        <input type="checkbox" name="count" value="5">
        <span style="color: #333;">5 components</span>
      </label>
      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
        <input type="checkbox" name="count" value="6">
        <span style="color: #333;">6 components</span>
      </label>
    </div>
    <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">
      Select which component counts to display on the map. No selection shows all countries.
    </p>
  </form>`;
  
  form.addEventListener('input', () => {
    const checked = Array.from(form.querySelectorAll('input[name="count"]:checked'))
      .map(d => +d.value);
    form.value = checked;
    form.dispatchEvent(new CustomEvent('input'));
  });
  
  form.value = []; // Default: show all
  return form;
}


function _filteredRangeData(componentCountFilters,processedRangeData)
{
  // If no filters selected, show all data
  if (componentCountFilters.length === 0) {
    return processedRangeData;
  }
  
  // Otherwise, show only countries with selected component counts
  return processedRangeData.filter(d => 
    componentCountFilters.includes(d.OA_Count_disagg)
  );
}


function _colorScale(d3){return(
d3.scaleOrdinal()
  .domain([1, 2, 3, 4, 5, 6])
  .range([
    "#cde1ec",  // 1 component
    "#8ec1da",  // 2 components  
    "#2066a8",  // 3 components
    "#1b485e",  // 4 components
    "#082a54",  // 5 components
    "#041426"   // 6 components
  ])
)}

function _countryLookup(filteredRangeData)
{
  const lookup = new Map();
  
  filteredRangeData.forEach(d => {
    if (d.numericId) {
      lookup.set(d.numericId, {
        country: d.COUNTRY,
        count: d.OA_Count_disagg,
        iso: d.ISO_CC
      });
    }
  });
  
  return lookup;
}


function _map(width,d3,world,countryLookup,colorScale)
{
  const mapWidth = Math.min(width || 960, 1200);   // ✅ NEW LINE ADDED
  const mapHeight = 500;                            // ✅ NEW LINE ADDED
  
  const svg = d3.create("svg")
    .attr("width", mapWidth)                        // ✅ CHANGED: width → mapWidth
    .attr("height", mapHeight)                      // ✅ CHANGED: 500 → mapHeight
    .attr("viewBox", [0, 0, mapWidth, mapHeight])   // ✅ CHANGED: [0,0,width,500] → [0,0,mapWidth,mapHeight]
    .attr("style", "max-width: 100%; height: auto;"); // ✅ NEW LINE ADDED

  const projection = d3.geoNaturalEarth1()
    .fitSize([mapWidth, mapHeight], world);         // ✅ CHANGED: [width,500] → [mapWidth,mapHeight]

  const path = d3.geoPath(projection);

  // Create tooltip
  const tooltip = d3.select("body").selectAll(".map-tooltip").data([0])
    .join("div")
    .attr("class", "map-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "rgba(0,0,0,0.8)")
    .style("color", "white")
    .style("padding", "8px")
    .style("border-radius", "4px")
    .style("font-size", "12px")
    .style("pointer-events", "none")
    .style("z-index", "1000");

  svg.selectAll("path")
    .data(world.features)
    .join("path")
    .attr("d", path)
    .attr("fill", d => {
      const countryInfo = countryLookup.get(d.id);
      return countryInfo ? colorScale(countryInfo.count) : "#f3f4f6";
    })
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 0.5)
    .style("cursor", "pointer")
    .on("mouseover", function(event, d) {
      const countryInfo = countryLookup.get(d.id);
      if (countryInfo) {
        d3.select(this).attr("stroke-width", 2);
        tooltip.style("visibility", "visible")
          .html(`<strong>${countryInfo.country}</strong><br/>
                 Components: ${countryInfo.count}`)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 10) + "px");
      }
    })
    .on("mouseout", function() {
      d3.select(this).attr("stroke-width", 0.5);
      tooltip.style("visibility", "hidden");
    });

  return svg.node();
}


function _legend(d3,colorScale)
{
  const svg = d3.create("svg")
    .attr("width", 400)
    .attr("height", 205);

  svg.append("text")
    .attr("x", 10)
    .attr("y", 20)
    .text("Legend - Number of Components Implemented")
    .style("font-weight", "bold")
    .style("font-size", "14px");

  // Create legend items for each count
  [1, 2, 3, 4, 5, 6].forEach((count, i) => {
    const y = 40 + i * 25;
    
    svg.append("circle")
      .attr("cx", 10)
      .attr("cy", y)
      .attr("r", 8)
      .attr("fill", colorScale(count));
    
    svg.append("text")
      .attr("x", 25)
      .attr("y", y + 5)
      .text(`${count} component${count > 1 ? 's' : ''}`)
      .style("font-size", "12px");
  });

  // Add "No initiatives" item
  svg.append("circle")
    .attr("cx", 10)
    .attr("cy", 190)
    .attr("r", 8)
    .attr("fill", "#f3f4f6");

  svg.append("text")
    .attr("x", 25)
    .attr("y", 195)
    .text("No initiatives")
    .style("font-size", "12px");

  return svg.node();
}


function _17(legend,htl){return(
htl.html`<div style="background: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 15px; margin: 15px 0;">
  ${legend}
</div>`
)}

function _rangeStats(d3,processedRangeData)
{
  // First, get unique countries with their max component count
  const uniqueCountries = d3.rollup(
    processedRangeData,
    v => d3.max(v, d => d.OA_Count_disagg), // Get max components for each country
    d => d.ISO_CC // Group by country ISO code
  );
  
  // Then count how many countries have each component count
  const countStats = d3.rollup(
    Array.from(uniqueCountries.values()),
    v => v.length, // Count unique countries
    d => d // Group by component count
  );
  
  return Array.from(countStats, ([count, countries]) => ({
    components: count,
    countries: countries
  })).sort((a, b) => a.components - b.components);
}


function _rangeStatsChart(Plot,rangeStats,colorScale){return(
Plot.plot({
  title: "Countries by Implementation Intensity",
  width: 800,
  height: 400,        // Increased from 300 to 400 (Plot.js needs more space)
  marginLeft: 150,    // Increased from 100 to 150 (match componentStats)
  marginTop: 30,      // Add top margin
  marginBottom: 50,   // Add bottom margin  
  marginRight: 60,    // Add right margin
  x: {grid: true, label: "Number of Countries", fontSize: 14, ticks: [0, 5, 10, 15, 20, 25]},
  y: {label: "Components Implemented", fontSize: 14},
  marks: [
    Plot.barX(rangeStats, {
      x: "countries",
      y: d => `${d.components} component${d.components > 1 ? 's' : ''}`,
      fill: d => colorScale(d.components),
      tip: true
    }),
    Plot.text(rangeStats, {
      x: "countries",
      y: d => `${d.components} component${d.components > 1 ? 's' : ''}`,
      text: d => d.countries,
      dx: 10,
      fill: "black",
      fontSize: 14      // Increased from 12 to 14 (match componentStats)
    })
  ]
})
)}

async function _oceanData(d3){return(
await d3.csv("https://raw.githubusercontent.com/SustainableDevelopmentReform/ocean-accounts-implementation/main/data/OA_global_stocktake_data.csv")
)}

function _21(__query,oceanData,invalidation){return(
__query(oceanData,{from:{table:"oceanData"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"oceanData")
)}

function _countrySummary(oceanData,normalizeISOCode)
{
  const summary = {};
  const unmatchedCountries = [];
  
  for (const initiative of oceanData) {
    const originalCode = initiative.isoCode; // Changed from ISO_Code
    const countryCode = normalizeISOCode(originalCode);
    
    if (!countryCode) {
      unmatchedCountries.push(initiative.country);
      continue;
    }
    
    if (!summary[countryCode]) {
      summary[countryCode] = {
        country: initiative.country, // Changed from Country
        isoCode: countryCode,
        originalIsoCode: originalCode,
        region: initiative.region, // Changed from Region
        continent: initiative.Continent, // This one seems to be capitalized
        initiatives: [],
        components: {
          environmentalAssets: false,
          flowsToEconomy: false,
          oceanEconomy: false,
          flowsToEnvironment: false,
          social: false,
          governance: false
        }
      };
    }
    
    // Add initiative to country's list
    summary[countryCode].initiatives.push(initiative);
    
    // Update components - check for various true values
    const isTrue = (value) => {
      if (!value) return false;
      const v = value.toString().trim().toUpperCase();
      return v === "1" || v === "TRUE" || v === "YES" || v === "Y" || v === "X";
    };
    
    // Using correct column names
    if (isTrue(initiative.environmentalAssets)) 
      summary[countryCode].components.environmentalAssets = true;
    if (isTrue(initiative.flowsToEconomy)) 
      summary[countryCode].components.flowsToEconomy = true;
    if (isTrue(initiative.oceanEconomy)) 
      summary[countryCode].components.oceanEconomy = true;
    if (isTrue(initiative.flowsToEnvironment)) 
      summary[countryCode].components.flowsToEnvironment = true;
    if (isTrue(initiative.social)) 
      summary[countryCode].components.social = true;
    if (isTrue(initiative.governance)) 
      summary[countryCode].components.governance = true;
  }
  
  // Generate implementation type for color coding
  Object.values(summary).forEach(country => {
    const activeComponents = [];
    if (country.components.environmentalAssets || country.components.flowsToEconomy || country.components.flowsToEnvironment) {
      activeComponents.push("Environmental-Economic");
    }
    if (country.components.oceanEconomy) {
      activeComponents.push("Ocean Economy");
    }
    if (country.components.social) {
      activeComponents.push("Social");
    }
    if (country.components.governance) {
      activeComponents.push("Governance");
    }
    country.implementationType = activeComponents.join(", ");
    
    // Create signature for consistent coloring
    country.signature = Object.entries(country.components)
      .filter(([_, hasComponent]) => hasComponent)
      .map(([name]) => name)
      .sort()
      .join('-');
  });
  
  // Log unmatched countries for debugging
  if (unmatchedCountries.length > 0) {
    console.log("Countries without ISO codes:", unmatchedCountries);
  }
  
  return summary;
}


function _componentNames(){return(
new Map([
  ["environmentalAssets", "Environmental Assets"],
  ["flowsToEconomy", "Flows to Economy"],
  ["oceanEconomy", "Ocean Economy"],
  ["flowsToEnvironment", "Flows to Environment"],
  ["social", "Social"],
  ["governance", "Governance"]
])
)}

function _activeFilters(html,componentNames,Event)
{
  const form = html`<form style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
    <div style="font-weight: bold; margin-right: 10px; align-self: center;">Filter by Components:</div>
    ${Array.from(componentNames.entries()).map(([key, label]) => {
      const id = `filter-${key}`;
      return html`
        <div style="display: flex; align-items: center;">
          <input type="checkbox" id="${id}" name="${key}" value="${key}">
          <label for="${id}" style="margin-left: 5px;">${label}</label>
        </div>
      `;
    })}
  </form>`;
  
  // Create an object to track the state of each checkbox
  const state = Object.fromEntries(
    Array.from(componentNames.keys()).map(key => [key, false])
  );
  
  // Update state when checkboxes change
  for (const checkbox of form.querySelectorAll('input[type=checkbox]')) {
    checkbox.oninput = () => {
      state[checkbox.name] = checkbox.checked;
      form.dispatchEvent(new Event("input"));
    };
  }
  
  // Set the form's value to be the state object
  form.value = state;
  
  return form;
}


function _selectedCountry(){return(
null
)}

function _colorScheme()
{
  const scheme = new Map([
    ["Environmental-Economic", "#1a9850"],  // Dark green
    ["Ocean Economy", "#66c2a5"],  // Light teal
    ["Environmental-Economic, Ocean Economy", "#abdda4"],  // Light green
    ["Environmental-Economic, Ocean Economy, Governance", "#762a83"],  // Purple
    ["Environmental-Economic, Governance", "#d95f02"],  // Orange
    ["Governance", "#5aae61"],  // Medium green
    ["Ocean Economy, Governance", "#2166ac"],  // Blue
    ["Social", "#e78ac3"],  // Pink
    ["", "#e0e0e0"]  // Gray for no initiatives
  ]);
  return scheme;
}


function _map2(activeFilters,d3,topojson,worldData,countrySummary,colorScheme,$0)
{
  // Check if a country passes the active filters
  const countryPassesFilters = (components) => {
    // If no filters are active, show all countries with initiatives
    const anyFilterActive = Object.values(activeFilters).some(filter => filter);
    if (!anyFilterActive) return true;
    
    // If filters are active, check if country has all selected components
    return Object.entries(activeFilters).every(([component, isActive]) => {
      // If filter isn't active, it doesn't affect the result
      if (!isActive) return true;
      // If filter is active, country must have this component
      return components[component];
    });
  };
  
  // Create the container element
  const width = 960;
  const height = 500;
  
  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto;");
  
  // Set up the map projection
  const projection = d3.geoNaturalEarth1()
    .scale(150)
    .translate([width / 2, height / 2]);
  const pathGenerator = d3.geoPath().projection(projection);
  const countries = topojson.feature(worldData, worldData.objects.countries).features;
  
  // Create tooltip
  const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("padding", "10px")
    .style("background", "rgba(0,0,0,0.8)")
    .style("color", "white")
    .style("border-radius", "5px")
    .style("pointer-events", "none");
  
  // Create country paths
  svg.selectAll("path")
    .data(countries)
    .join("path")
    .attr("d", pathGenerator)
    .attr("fill", d => {
      const countryCode = d.id;
      const countryData = countrySummary[countryCode];
      
      // If no initiatives or doesn't pass filters, color gray
      if (!countryData || !countryPassesFilters(countryData.components)) {
        return "#e0e0e0";
      }
      
      // Color based on implementation type
      return colorScheme.get(countryData.implementationType) || "#e0e0e0";
    })
    .attr("stroke", "#fff")
    .attr("stroke-width", 0.5)
    .attr("cursor", d => countrySummary[d.id] ? "pointer" : "default")
    .on("mouseover", function(event, d) {
      const countryData = countrySummary[d.id];
      if (countryData) {
        tooltip.transition().duration(200).style("opacity", .9);
        tooltip.html(`<strong>${countryData.country}</strong><br/>
                      Initiatives: ${countryData.initiatives.length}<br/>
                      Implementation: ${countryData.implementationType || "None"}`)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 28) + "px");
      }
    })
    .on("mouseout", function(d) {
      tooltip.transition().duration(500).style("opacity", 0);
    })
    .on("click", function(event, d) {
      const countryData = countrySummary[d.id];
      if (countryData && countryPassesFilters(countryData.components)) {
        // Update the mutable value
        $0.value = countryData;
      }
    });
  
  return svg.node();
}


function _countryDetails(selectedCountry,html,$0,componentNames,formatLinkText)
{
  if (selectedCountry === null) return html`<div style="margin-top: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
    <p style="color: #666; text-align: center;">Click on a country to see details about its ocean accounting initiatives</p>
  </div>`;
  
  return html`
    <div style="margin-top: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
      <div style="display: flex; justify-content: space-between; align-items: start;">
        <h2 style="margin-top: 0;">${selectedCountry.country}</h2>
        ${(() => {
          const btn = html`<button style="padding: 5px 10px;">✕ Close</button>`;
          btn.onclick = () => { $0.value = null; };
          return btn;
        })()}
      </div>

      <h3>Components Implemented:</h3>
      <ul style="padding-left: 20px;">
        ${Array.from(componentNames.entries()).map(([key, label]) => {
          return html`<li style="margin-bottom: 5px;">
            <span style="display: inline-block; width: 12px; height: 12px; background-color: ${
              selectedCountry.components[key] ? "green" : "#ccc"
            }; border-radius: 50%; margin-right: 8px;"></span>
            ${label}
          </li>`;
        })}
      </ul>
      
      <h3>Initiatives (${selectedCountry.initiatives.length}):</h3>
      <div style="max-height: 300px; overflow-y: auto; border: 1px solid #eee; padding: 10px;">
        ${selectedCountry.initiatives.map(initiative => {
          // ADDED: Check if initiative has any links
          const hasLinks = initiative.Links || initiative.Links_2 || initiative.Links_3;
          
          return html`
            <div style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee;">
              <strong>${initiative.name_descriptor || "Unnamed Initiative"}</strong>
              <div>Year: ${initiative.year_publication || "N/A"}</div>
              <div>Scale: ${initiative['scale_(EAA)'] || "N/A"}</div>
              <div>Component: ${initiative.oceanAccountComponent || "N/A"}</div>
              ${hasLinks ? html`
                <div style="margin-top: 10px;">
                  <strong style="font-size: 14px;">Online Sources:</strong>
                  <ul style="margin: 5px 0 0 20px; padding: 0; list-style-type: disc;">
                    ${initiative.Links ? html`
                      <li style="margin-bottom: 3px;">
                        <a href="${initiative.Links}" target="_blank" 
                           style="color: #0066cc; text-decoration: none; font-size: 13px;"
                           onmouseover="this.style.textDecoration='underline'" 
                           onmouseout="this.style.textDecoration='none'">
                          ${formatLinkText(initiative.Links)}
                        </a>
                      </li>` : ''}
                    ${initiative.Links_2 ? html`
                      <li style="margin-bottom: 3px;">
                        <a href="${initiative.Links_2}" target="_blank" 
                           style="color: #0066cc; text-decoration: none; font-size: 13px;"
                           onmouseover="this.style.textDecoration='underline'" 
                           onmouseout="this.style.textDecoration='none'">
                          ${formatLinkText(initiative.Links_2)}
                        </a>
                      </li>` : ''}
                    ${initiative.Links_3 ? html`
                      <li style="margin-bottom: 3px;">
                        <a href="${initiative.Links_3}" target="_blank" 
                           style="color: #0066cc; text-decoration: none; font-size: 13px;"
                           onmouseover="this.style.textDecoration='underline'" 
                           onmouseout="this.style.textDecuration='none'">
                          ${formatLinkText(initiative.Links_3)}
                        </a>
                      </li>` : ''}
                  </ul>
                </div>
              ` : ''}
            </div>
          `;
        })}
      </div>
    </div>
  `;
}


function _regionalInitiatives(oceanData,d3)
{
  // Find initiatives without country ISO codes or with regional scale
  const regional = oceanData.filter(initiative => {
    // Check if it's regional based on:
    // 1. No ISO code
    // 2. Scale indicates regional
    // 3. Country field might be empty or indicate a region
    const hasNoCountryCode = !initiative.isoCode || initiative.isoCode === "";
    const scaleText = (initiative['scale_(EAA)'] || "").toLowerCase();
    const countryText = (initiative.country || "").toLowerCase();
    
    const isRegionalScale = scaleText.includes('regional') ||
                          scaleText.includes('multi-country') ||
                          scaleText.includes('global');
                          
    const isRegionalCountry = countryText.includes('region') ||
                            countryText.includes('pacific') ||
                            countryText.includes('caribbean') ||
                            countryText.includes('ocean') ||
                            countryText.includes('global');
    
    return hasNoCountryCode || isRegionalScale || isRegionalCountry;
  });
  
  // Group by region
  const byRegion = d3.group(regional, d => d.region || d.country || "Unspecified");
  
  // Convert to array for easier display
  const regionGroups = Array.from(byRegion, ([region, initiatives]) => ({
    region: region,
    count: initiatives.length,
    initiatives: initiatives
  })).sort((a, b) => b.count - a.count);
  
  return regionGroups;
}


function _formatLinkText(){return(
(url) => {
  if (!url) return "";
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    // If not a valid URL, return a truncated version
    return url.length > 50 ? url.substring(0, 50) + '...' : url;
  }
}
)}

function _regionalInitiativesDisplay(html,regionalInitiatives,formatLinkText){return(
html`
  <div style="margin-top: 40px; border: 2px solid #0077b6; border-radius: 10px; padding: 20px; background-color: #f0f8ff;">
    <h2 style="margin-top: 0; color: #0077b6;">🌊 Regional & multi-country initiatives</h2>
    <p style="color: #666; margin-bottom: 20px;">
      These initiatives span multiple countries or entire regions and are not displayed on the country map above.
    </p>
    
    ${regionalInitiatives.length === 0 ? html`
      <p style="color: #999; font-style: italic;">No regional initiatives found in the dataset.</p>
    ` : html`
      <div style="display: grid; gap: 20px;">
        ${regionalInitiatives.map(regionGroup => html`
          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background-color: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="margin-top: 0; color: #2d6a4f; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
              ${regionGroup.region} 
              <span style="font-weight: normal; color: #666; font-size: 0.9em;">
                (${regionGroup.count} initiative${regionGroup.count > 1 ? 's' : ''})
              </span>
            </h3>
            
            <div style="display: grid; gap: 15px;">
              ${regionGroup.initiatives.map(initiative => {
                // Check which components this initiative has
                const components = [];
                const isTrue = (value) => {
                  if (!value) return false;
                  const v = value.toString().trim();
                  return v === "1" || v === "TRUE" || v === "true";
                };
                
                if (isTrue(initiative.environmentalAssets)) 
                  components.push("Environmental Assets");
                if (isTrue(initiative.flowsToEconomy)) 
                  components.push("Flows to Economy");
                if (isTrue(initiative.oceanEconomy)) 
                  components.push("Ocean Economy");
                if (isTrue(initiative.flowsToEnvironment)) 
                  components.push("Flows to Environment");
                if (isTrue(initiative.social)) 
                  components.push("Social");
                if (isTrue(initiative.governance)) 
                  components.push("Governance");
                
                const hasLinks = initiative.Links || initiative.Links_2 || initiative.Links_3;
                
                return html`
                  <div style="padding: 12px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #40916c;">
                    <strong style="font-size: 16px; color: #333;">
                      ${initiative.name_descriptor || "Unnamed Regional Initiative"}
                    </strong>
                    
                    <div style="margin-top: 8px; font-size: 14px; color: #666;">
                      ${initiative.year_publication ? html`<div><strong>Year:</strong> ${initiative.year_publication}</div>` : ''}
                      ${initiative['scale_(EAA)'] ? html`<div><strong>Scale:</strong> ${initiative['scale_(EAA)']}</div>` : ''}
                      ${initiative.country ? html`<div><strong>Coverage:</strong> ${initiative.country}</div>` : ''}
                      ${components.length > 0 ? html`
                        <div style="margin-top: 5px;">
                          <strong>Components:</strong> 
                          <span style="color: #2d6a4f;">${components.join(" • ")}</span>
                        </div>
                      ` : ''}
                    </div>
                    
                    ${hasLinks ? html`
                      <div style="margin-top: 10px;">
                        <strong style="font-size: 14px;">Online Sources:</strong>
                        <ul style="margin: 5px 0 0 20px; padding: 0; list-style-type: disc;">
                          ${initiative.Links ? html`
                            <li style="margin-bottom: 3px;">
                              <a href="${initiative.Links}" target="_blank" 
                                 style="color: #0066cc; text-decoration: none; font-size: 13px;"
                                 onmouseover="this.style.textDecoration='underline'" 
                                 onmouseout="this.style.textDecoration='none'">
                                ${formatLinkText(initiative.Links)}
                              </a>
                            </li>` : ''}
                          ${initiative.Links_2 ? html`
                            <li style="margin-bottom: 3px;">
                              <a href="${initiative.Links_2}" target="_blank" 
                                 style="color: #0066cc; text-decoration: none; font-size: 13px;"
                                 onmouseover="this.style.textDecoration='underline'" 
                                 onmouseout="this.style.textDecoration='none'">
                                ${formatLinkText(initiative.Links_2)}
                              </a>
                            </li>` : ''}
                          ${initiative.Links_3 ? html`
                            <li style="margin-bottom: 3px;">
                              <a href="${initiative.Links_3}" target="_blank" 
                                 style="color: #0066cc; text-decoration: none; font-size: 13px;"
                                 onmouseover="this.style.textDecoration='underline'" 
                                 onmouseout="this.style.textDecoration='none'">
                                ${formatLinkText(initiative.Links_3)}
                              </a>
                            </li>` : ''}
                        </ul>
                      </div>
                    ` : ''}
                  </div>
                `;
              })}
            </div>
          </div>
        `)}
      </div>
    `}
    
    <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd;">
      <p style="color: #666; font-size: 14px; margin: 0;">
        <strong>Note:</strong> Regional initiatives are identified by having no country ISO code, 
        regional/multi-country scale indicators, or region names in the country field.
      </p>
    </div>
  </div>
`
)}

function _mapLegend(html,colorScheme){return(
html`
  <div style="margin-top: 20px; border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
    <h3 style="margin-top: 0; margin-bottom: 15px;">Legend - Implementation Types</h3>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      ${Array.from(colorScheme.entries()).filter(([type, _]) => type !== "").map(([type, color]) => {
        return html`
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 20px; height: 20px; background-color: ${color}; border-radius: 50%; flex-shrink: 0;"></div>
            <div style="font-size: 14px; line-height: 1.2;">
              ${type.split(", ").map((t, i, arr) => html`
                ${t}${i < arr.length - 1 ? html`<br/>+ ` : ''}
              `)}
            </div>
          </div>
        `;
      })}
      <div style="display: flex; align-items: center; gap: 10px;">
        <div style="width: 20px; height: 20px; background-color: #e0e0e0; border-radius: 50%; flex-shrink: 0;"></div>
        <div style="font-size: 18px;">No initiatives or filtered out</div>
      </div>
    </div>
  </div>
`
)}

function _componentStats(componentNames,countrySummary,d3)
{
  // Count countries with each component
  const stats = new Map();
  componentNames.forEach((label, key) => {
    stats.set(key, 0);
  });
  
  Object.values(countrySummary).forEach(country => {
    componentNames.forEach((label, key) => {
      if (country.components[key]) {
        stats.set(key, stats.get(key) + 1);
      }
    });
  });

    // Define colors for each component bar
  const barColors = {
    environmentalAssets: "#2d6a4f",      // Dark green
    flowsToEconomy: "#40916c",           // Medium green
    oceanEconomy: "#0077b6",             // Blue
    flowsToEnvironment: "#e85d04",       // Orange
    social: "#e78ac3",                   // Pink
    governance: "#7b2cbf"                // Purple
  };
  
  // Prepare data for the chart
  const data = Array.from(stats.entries()).map(([key, value]) => ({
    component: componentNames.get(key),
    countries: value,
    color: barColors[key]
  }));
  
  // Create a bar chart
  const margin = {top: 20, right: 30, bottom: 40, left: 150};
  const width = 600 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;
  
  const svg = d3.create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom])
    .attr("style", "max-width: 100%; height: auto;");
  
  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
  
  // X axis
  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.countries)])
    .range([0, width]);
  
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")
    .style("font-size", "14px");
  
  // Y axis
  const y = d3.scaleBand()
    .domain(data.map(d => d.component))
    .range([0, height])
    .padding(0.1);
  
  g.append("g")
    .call(d3.axisLeft(y))
    .style("font-size", "14px");
  
  // Bars
  g.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", 0)
    .attr("y", d => y(d.component))
    .attr("width", d => x(d.countries))
    .attr("height", y.bandwidth())
    .attr("fill", d => d.color);
  
  // Add value labels
  g.selectAll(".text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", d => x(d.countries) + 5)
    .attr("y", d => y(d.component) + y.bandwidth() / 2)
    .attr("dy", ".35em")
    .style("font-size", "14px")
    .text(d => d.countries);
  
  // Title
  svg.append("text")
    .attr("x", (width + margin.left + margin.right) / 2)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("margin-bottom", "20px")
    .text("");
  
  return svg.node();
}


function _matchingInfo(countrySummary,oceanData,html)
{
  const mapped = Object.keys(countrySummary).length;
  const total = new Set(oceanData.map(d => d.country)).size;
  return html`<div style="background: #f0f0f0; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
    <strong>Data Loading Status:</strong> Successfully matched ${mapped} out of ${total} countries to the map.
  </div>`;
}


function _35(html,$0,map,legend,rangeStatsChart,$1,map2,mapLegend,countryDetails,componentStats,regionalInitiativesDisplay){return(
html`
  <div style="font-family: sans-serif; max-width: 1200px; margin: 0 auto;">
    
    <!-- Overall Title and Description -->
    <div style="margin-bottom: 40px;">
      <h1 style="margin-bottom: 5px; color: #333; font-size: 32px; font-weight: 600;">
        Global progress in ocean accounting
      </h1>
      <h1 style="margin-top: 0; margin-bottom: 15px; color: #333; font-size: 28px; font-weight: 600; font-style: italic">
         stocktake interactive maps
      </h1>
      <p style="margin-top: 0; margin-bottom: 20px; color: #444; font-size: 16px; line-height: 1.6;">
        These interactive visualizations show which countries are implementing ocean accounting initiatives worldwide. While the Ocean Accounts Framework (Figure 1 in the main paper) illustrates the full complexity of ocean systems with numerous flows and connections between environmental, economic, and social domains, we classified initiatives based on <strong>six key implementation components</strong> that represent the most commonly developed areas in practice. This classification enables systematic comparison of implementation progress across countries while acknowledging that the complete framework is more comprehensive than these categories suggest.
      </p>
      <ul style="color: #444; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
        <li style="margin-bottom: 15px;"><strong>Environmental Assets</strong>: Specifically, here we recorded those focusing on <strong>Ecosystem Assets</strong>. Ecosystem assets are conceptualized as spatially-defined areas containing combinations of biotic and abiotic components that function together as a unit, potentially supplying a range of ecosystem services. For the ocean domain, these may include coral reefs, seagrass meadows, mangroves, coastal wetlands, pelagic and benthic marine ecosystems. The Framework enables tracking of both the extent and condition of these assets, with their condition potentially measured through variables like biodiversity indices, water quality parameters, and other indicators relevant to ecological functioning and supply of services.</li>
        
        <li style="margin-bottom: 15px;"><strong>Flows to Economy</strong>: capture how ocean services move from the environment to economic use. These accounts track both physical quantities and monetary values of materials extraction (fish, minerals, genetic resources), energy production (offshore wind, wave, tidal, oil, gas), and the full range of ecosystem services.</li>
        
        <li style="margin-bottom: 15px;"><strong>Ocean Economy</strong> or <strong>Ocean Economy Satellite Accounts</strong>: extend standard national accounting to capture ocean-specific economic activity. These accounts measure production by ocean economic sectors, consumption patterns, capital accumulation, trade flows, and employment. These accounts enable calculation of ocean economy's contribution to GDP.</li>
        
        <li style="margin-bottom: 15px;"><strong>Flows to Environment</strong>: record the reverse direction - outputs from the economy back to the ocean. These residuals accounts track solid waste flows, air emissions affecting oceans, water-based pollution from land sources, and direct marine pollution from ships and offshore activities.</li>
        
        <li style="margin-bottom: 15px;"><strong>Social accounts</strong>: incorporate social dimensions affecting and affected by ocean environments and economies. This can include measures of wellbeing, vulnerability, and resilience in coastal communities—such as poverty rates, food security, and disaster risk exposure. Social indicators may be disaggregated by demographic factors to facilitate equity analyses.</li>
        
        <li style="margin-bottom: 0;"><strong>Governance accounts</strong> (within the social domain): document institutional arrangements, legal frameworks, customary practices, and policy instruments that shape human-ocean interactions. These qualitative descriptors can provide context for understanding how governance mechanisms mediate relationships between communities, economies, and marine environments across scales—from local management systems to international ocean resource conventions.</li>
      </ul>
      </p>
      <p style="margin-top: 0; margin-bottom: 20px; color: #444; font-size: 16px; line-height: 1.6;">
The maps below show both the range of implementation (how many of these six components) and the specific types of components each country has implemented.
      </p>
      </ul>
    </div>

    <!-- Map 1 Title and Description -->
    <div style="margin-bottom: 20px;">
      <h2 style="margin-bottom: 10px; color: #333; font-size: 26px; font-weight: 600;">
        Map 1: Implementation range by country
      </h2>
      <h3 style="margin-bottom: 15px; color: #333; font-size: 20px; font-weight: 500; font-style: italic;">
        How many ocean accounting components has each country implemented?
      </h3>
      <p style="margin-top: 0; margin-bottom: 20px; color: #444; font-size: 16px; line-height: 1.6;">
        This map shows the breadth of ocean accounting implementation worldwide, with countries color-coded by the total number of components they have carried out. Countries with darker shading have implemented more types of ocean accounts, while lighter shading indicates countries that implemented less number of ocean accounts components (see above for "components" included).
      </p>
      <p style="margin-top: 0; margin-bottom: 20px; color: #444; font-size: 16px; line-height: 1.6;">
        Use the legend to understand the implementation scale. Click on any colored country to see the amount of ocean accounts components implemented.
      </p>
    </div>

    <!-- Filters for Map 1 -->
    ${$0}
    
    <!-- Map 1 Container -->
    <div id="map-container" style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 5px; padding: 10px;">
      ${map}
    </div>
    
    <!-- Map 1 Legend and Stats Side by Side -->
    <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 20px; margin-bottom: 50px;">
      <div>${legend}</div>
      <div style="min-height: 350px;">${rangeStatsChart}</div>
    </div>

    <!-- Map 2 Title and Description -->
    <div style="margin-bottom: 20px;">
      <h2 style="margin-bottom: 8px; color: #333; font-size: 26px; font-weight: 600;">
        Map 2: Component implementation by country
      </h2>
      <h3 style="margin-bottom: 15px; color: #333; font-size: 20px; font-weight: 500; font-style: italic;">
        Which specific ocean accounting components has each country implemented?
      </h3>
      <p style="margin-top: 0; margin-bottom: 20px; color: #444; font-size: 16px; line-height: 1.6;">
        This map shows countries implementing ocean accounting by component type. Countries are color-coded to show which specific ocean accounting components they have implemented.
      </p>
      <p style="margin-top: 0; margin-bottom: 20px; color: #444; font-size: 16px; line-height: 1.6;">
        Use the checkboxes to filter countries by the components they have implemented. Click on any colored country to see details about all initiatives in that country. When clicking, more information about the specific initiatives and country progress will appear underneath the map, along with statistics and details about Regional & Multi-Country Initiatives.
      </p>
    </div>
    
    <!-- Filters for Map 2 -->
    ${$1}
    
    <!-- Map 2 Container -->
    <div id="map-container" style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 5px; padding: 10px;">
      ${map2}
    </div>
    
    <!-- Map 2 Legend and Country Details -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div>${mapLegend}</div>
      <div>${countryDetails}</div>
    </div>

    <!-- Component Implementation Statistics -->
    <div style="margin-top: 30px;">
      <h2>Component Implementation Statistics</h2>
      <p style="margin-top: 0; margin-bottom: 25px; color: #666; font-size: 16px;">
        Number of Countries Implementing Each Component
      </p>
      ${componentStats}
    </div>

    <!-- Regional Initiatives -->
    ${regionalInitiativesDisplay}
  </div>
  <!-- Repository Link -->
    <div style="margin-top: 60px; padding: 30px; background: #f8f9fa; border-radius: 10px; text-align: center; border: 2px solid #0077b6;">
      <h3 style="margin-top: 0; color: #333; font-size: 22px;">📊 Data & Code Repository</h3>
      <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        All data, code, and documentation for this interactive visualization are openly available on GitHub.
      </p>
      <a href="https://github.com/SustainableDevelopmentReform/ocean-accounts-implementation" 
         target="_blank" 
         rel="noopener noreferrer"
         style="
           display: inline-block;
           padding: 12px 30px;
           background: #0077b6;
           color: white;
           text-decoration: none;
           border-radius: 6px;
           font-size: 16px;
           font-weight: 600;
           transition: background 0.3s ease;
         "
         onmouseover="this.style.background='#005a8d'"
         onmouseout="this.style.background='#0077b6'">
        View Repository on GitHub → https://github.com/SustainableDevelopmentReform/ocean-accounts-implementation/blob/main/data/OA_global_stocktake_data.csv
      </a>
      <p style="color: #888; font-size: 14px; margin-top: 15px; margin-bottom: 0;">
        Cite: Alarcon et al. (2025). Global progress in ocean accounting for sustainable development.
      </p>
    </div>
  </div>
`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("topojson")).define("topojson", ["require"], _topojson);
  main.variable(observer("worldData")).define("worldData", ["d3"], _worldData);
  main.variable(observer("isoCodeMapping")).define("isoCodeMapping", _isoCodeMapping);
  main.variable(observer("normalizeISOCode")).define("normalizeISOCode", ["isoCodeMapping"], _normalizeISOCode);
  main.variable(observer("world")).define("world", ["topojson","worldData"], _world);
  main.variable(observer("rangeData")).define("rangeData", ["d3"], _rangeData);
  main.variable(observer()).define(["__query","rangeData","invalidation"], _9);
  main.variable(observer("processedRangeData")).define("processedRangeData", ["rangeData","normalizeISOCode"], _processedRangeData);
  main.variable(observer("viewof componentCountFilters")).define("viewof componentCountFilters", ["html"], _componentCountFilters);
  main.variable(observer("componentCountFilters")).define("componentCountFilters", ["Generators", "viewof componentCountFilters"], (G, _) => G.input(_));
  main.variable(observer("filteredRangeData")).define("filteredRangeData", ["componentCountFilters","processedRangeData"], _filteredRangeData);
  main.variable(observer("colorScale")).define("colorScale", ["d3"], _colorScale);
  main.variable(observer("countryLookup")).define("countryLookup", ["filteredRangeData"], _countryLookup);
  main.variable(observer("map")).define("map", ["width","d3","world","countryLookup","colorScale"], _map);
  main.variable(observer("legend")).define("legend", ["d3","colorScale"], _legend);
  main.variable(observer()).define(["legend","htl"], _17);
  main.variable(observer("rangeStats")).define("rangeStats", ["d3","processedRangeData"], _rangeStats);
  main.variable(observer("rangeStatsChart")).define("rangeStatsChart", ["Plot","rangeStats","colorScale"], _rangeStatsChart);
  main.variable(observer("oceanData")).define("oceanData", ["d3"], _oceanData);
  main.variable(observer()).define(["__query","oceanData","invalidation"], _21);
  main.variable(observer("countrySummary")).define("countrySummary", ["oceanData","normalizeISOCode"], _countrySummary);
  main.variable(observer("componentNames")).define("componentNames", _componentNames);
  main.variable(observer("viewof activeFilters")).define("viewof activeFilters", ["html","componentNames","Event"], _activeFilters);
  main.variable(observer("activeFilters")).define("activeFilters", ["Generators", "viewof activeFilters"], (G, _) => G.input(_));
  main.define("initial selectedCountry", _selectedCountry);
  main.variable(observer("mutable selectedCountry")).define("mutable selectedCountry", ["Mutable", "initial selectedCountry"], (M, _) => new M(_));
  main.variable(observer("selectedCountry")).define("selectedCountry", ["mutable selectedCountry"], _ => _.generator);
  main.variable(observer("colorScheme")).define("colorScheme", _colorScheme);
  main.variable(observer("map2")).define("map2", ["activeFilters","d3","topojson","worldData","countrySummary","colorScheme","mutable selectedCountry"], _map2);
  main.variable(observer("countryDetails")).define("countryDetails", ["selectedCountry","html","mutable selectedCountry","componentNames","formatLinkText"], _countryDetails);
  main.variable(observer("regionalInitiatives")).define("regionalInitiatives", ["oceanData","d3"], _regionalInitiatives);
  main.variable(observer("formatLinkText")).define("formatLinkText", _formatLinkText);
  main.variable(observer("regionalInitiativesDisplay")).define("regionalInitiativesDisplay", ["html","regionalInitiatives","formatLinkText"], _regionalInitiativesDisplay);
  main.variable(observer("mapLegend")).define("mapLegend", ["html","colorScheme"], _mapLegend);
  main.variable(observer("componentStats")).define("componentStats", ["componentNames","countrySummary","d3"], _componentStats);
  main.variable(observer("matchingInfo")).define("matchingInfo", ["countrySummary","oceanData","html"], _matchingInfo);
  main.variable(observer()).define(["html","viewof componentCountFilters","map","legend","rangeStatsChart","viewof activeFilters","map2","mapLegend","countryDetails","componentStats","regionalInitiativesDisplay"], _35);
  return main;
}
