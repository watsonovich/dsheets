const myobj = {
  process: "STD",
  parent: {
    number: "NCA1B150-0100",
    attributes: [
      { name: "UM", value: "EA" },
      { name: "description", value: "Cylinder, NCA1, Tie Rod" },
      { name: "prod-series", value: "NCA1" },
      { name: "prod-code", value: "NCA1" },
      { name: "dta-src", value: "US_NCA1_ERP.tcx" },
      { name: "size", value: "150" },
      { name: "type", value: "Unit" },
      { name: "weight", value: "0.80" },
      { name: "wght-um", value: "KG" },
      { name: "ova-wdth", value: "50.8" },
      { name: "ova-hght", value: "50.8" },
      { name: "ova-lnght", value: "165.10" },
      { name: "ova-dim", value: "MM" },
      { name: "autosw-cap", value: "No" },
      { name: "rohs", value: "Yes" },
      { name: "rohs-3", value: null },
      { name: "cu-fr", value: "No" },
      { name: "hpf", value: "No" },
      { name: "dot", value: "No" },
      { name: "nfpa", value: "Yes" },
      { name: "iso", value: "No" },
      { name: "clean", value: "No" },
      { name: "sec-btry", value: "No" },
      { name: "expp", value: "No" },
      { name: "ozn-res", value: "No" },
      { name: "temp-min", value: "40" },
      { name: "temp-max", value: "140" },
      { name: "temp-um", value: "F" },
      { name: "min-op", value: "8" },
      { name: "max-op", value: "250" },
      { name: "op-um", value: "PSI" },
      { name: "set-min", value: "" },
      { name: "set-max", value: "" },
      { name: "set-um", value: "" },
      { name: "pilot-min", value: "" },
      { name: "pilot-max", value: "" },
      { name: "pilot-um", value: "" },
      { name: "volt", value: "" },
      { name: "volt-um", value: "" },
      { name: "freq", value: "" },
      { name: "freq-um", value: "" },
      { name: "part-grd", value: "" },
      { name: "ansi", value: "N/A" },
    ],
  },
};

console.log(myobj.parent.number);
console.log(myobj.parent.attributes[5].value);
