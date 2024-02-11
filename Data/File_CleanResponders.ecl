IMPORT $,STD;
Fire     := $.File_AllData.FireDS; 
Police   := $.File_AllData.PoliceDS;
Hospital := $.File_AllData.HospitalDS;
Cities   := $.File_AllData.City_DS;

EXPORT File_CleanResponders := MODULE
//This module is used to clean the File, Police, and Hospital datasets to be indexed and used in the NCMEC ROXIE service
//DATASETs generated in BWR_GenerateCleanResponders, but declared here.
//INDEXes built in BWR_BuildIndexes, but also declared here.
SHARED CleanFireRec := RECORD
    STRING100 name;
    STRING60  addressbuildingname;
    STRING65  address;
    UNSIGNED3 PrimaryFIPS := 0; //New - Added from Cities DS
    STRING35  city;
    STRING2   state;
    STRING10  zipcode;
END;
EXPORT CleanFire := PROJECT(Fire,TRANSFORM(CleanFireRec,
                                          SELF.name                := STD.STR.ToUpperCase(LEFT.name),
                                          SELF.addressbuildingname := STD.STR.ToUpperCase(LEFT.addressbuildingname),
                                          SELF.address             := STD.STR.ToUpperCase(LEFT.address),
                                          SELF.city                := STD.STR.ToUpperCase(LEFT.city),
                                          SELF.state               := STD.STR.ToUpperCase(LEFT.state),
                                          SELF.zipcode             := STD.STR.ToUpperCase(LEFT.zipcode)));
EXPORT CleanFireFIPS := JOIN(CleanFire,Cities,
                           LEFT.city  = STD.STR.ToUpperCase(RIGHT.city) AND
                           LEFT.state = RIGHT.state_id,
                           TRANSFORM(CleanFireRec,
                                     SELF.PrimaryFIPS := (UNSIGNED3)RIGHT.county_fips,
                                     SELF             := LEFT),LEFT OUTER,LOOKUP);                                          
                                          
EXPORT CleanFireDS      := DATASET('~HMK::OUT::Fire',CleanFireRec,FLAT);
EXPORT CleanFireIDX     := INDEX(CleanFireDS,{city,state},{CleanFireDS}, '~HMK::IDX::Fire::CityPay');
EXPORT CleanFireFIPSIDX := INDEX(CleanFireDS,{PrimaryFIPS},{CleanFireDS},'~HMK::IDX::Fire::FIPSPay');
EXPORT BuildFireIDX     := BUILD(CleanFireIDX,OVERWRITE);
EXPORT BuildFireFIPSIDX := BUILD(CleanFireFIPSIDX,OVERWRITE);
                                          
//Police
SHARED CleanPoliceRec := RECORD
    STRING135 name;
    STRING80  address;
    STRING30  city;
    STRING2   state;
    STRING5   zip;
    STRING15  zip4;
    STRING15  telephone;
    STRING25  type;
    STRING15  status;
    INTEGER3  population;
    STRING25  county;
    UNSIGNED3 countyfips;
    STRING3   country;
    REAL8     latitude;
    REAL8     longitude;
END;

EXPORT CleanPolice     := PROJECT(Police,TRANSFORM(CleanPoliceRec,SELF.countyfips := (UNSIGNED3)LEFT.countyfips,SELF := LEFT));
// EXPORT CleanPoliceFIPS := JOIN(CleanPolice,Cities,
                               // LEFT.city  = STD.STR.ToUpperCase(RIGHT.city) AND
                               // LEFT.state = RIGHT.state_id,
                               // TRANSFORM(CleanPoliceRec,
                                         // SELF.countyFIPS := (UNSIGNED3)RIGHT.county_fips,
                                         // SELF            := LEFT),LEFT OUTER,LOOKUP);   
EXPORT CleanPoliceDS  := DATASET('~HMK::OUT::Police',CleanPoliceRec,FLAT);
EXPORT CleanPoliceIDX := INDEX(CleanPoliceDS,{countyfips,City,State},{CleanPoliceDS},'~HMK::IDX::Police::CityPay');
EXPORT BuildPoliceIDX := BUILD(CleanPoliceIDX,OVERWRITE);

//Hospital
SHARED CleanHospitalRec := RECORD
    STRING95  name;
    STRING80  address;
    STRING35  city;
    STRING2   state;
    STRING5   zip;
    STRING15  zip4;
    STRING15  telephone;
    STRING20  type;
    STRING6   status;
    INTEGER2  population;
    STRING20  county;
    UNSIGNED3 countyfips;
    STRING3   country;
    REAL8     latitude;
    REAL8     longitude;
END;

EXPORT CleanHospital       := PROJECT(Hospital,TRANSFORM(CleanHospitalRec,SELF.countyfips := (UNSIGNED3)LEFT.countyfips,SELF := LEFT));
EXPORT CleanHospitalDS     := DATASET('~HMK::OUT::Hospital',CleanHospitalRec,FLAT);
EXPORT CleanHospitalIDX    := INDEX(CleanHospitalDS,{countyfips,City,state},{CleanHospitalDS},'~HMK::IDX::Hospital::CityPay');
EXPORT BuildHospitalIDX    := BUILD(CleanHospitalIDX,OVERWRITE);

END;
