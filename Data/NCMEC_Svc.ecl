IMPORT $,STD;
UpperIt(STRING txt) := Std.Str.ToUpperCase(txt);
 FireKey      := $.File_CleanResponders.CleanFireIDX;
 FireFIPSKey  := $.File_CleanResponders.CleanFireFIPSIDX; 
 PoliceKey    := $.File_CleanResponders.CleanPoliceIDX;
 HospitalKey  := $.File_CleanResponders.CleanHospitalIDX;
 UNSIGNED3 fips_value  := 0   : STORED('FIPS');
 STRING23  city_value  := ''  : STORED('City');
 STRING2   state_value  := '' : STORED('State');
 

Primary     := IF(fips_value <> 0,
                  $.FN_FindKids.By_FIPS(fips_value),
                  $.FN_FindKids.By_CityST(city_value,state_value));
              
GetFire     := IF(city_value <> '',
                   OUTPUT(FireKey(City = UpperIt(city_Value) AND State = UpperIt(state_Value))),
                   OUTPUT(FireFIPSKey(primaryfips = fips_value)));  
               
GetPolice   := IF(city_value <> '',
                   OUTPUT(PoliceKey(City = UpperIt(city_Value) AND State = UpperIt(state_Value) AND WILD(countyfips))),
                   OUTPUT(PoliceKey(countyfips = fips_value)));

GetHospital := IF(city_value <> '',
                   OUTPUT(HospitalKey(City = UpperIt(city_Value) AND State = UpperIt(state_Value) AND WILD(countyfips))),
                   OUTPUT(HospitalKey(countyfips = fips_value)));               

// EXPORT NCMEC_Svc := Primary;
EXPORT NCMEC_Svc := SEQUENTIAL(OUTPUT(Primary),GetFire,GetPolice,GetHospital);