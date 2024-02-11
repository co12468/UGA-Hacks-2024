IMPORT $,STD;
UpperIt(STRING txt) := Std.Str.ToUpperCase(txt);

EXPORT fn_FindKids := MODULE
     SHARED NCMECKey     := $.File_EnhanceNCMEC.NCMECPlusIDXPay;

//PrimaryFIPS,missingstate
     EXPORT By_CityST(STRING23 city_in,STRING2  st_in)      := FUNCTION
           RETURN IF(st_in = '',
                     NCMECKey(KEYED(missingcity=UpperIt(city_in)),WILD(PrimaryFIPS),WILD(missingstate)),
                     NCMECKey(KEYED(missingcity=UpperIt(city_in)),KEYED(missingstate=UpperIt(st_in)),WILD(PrimaryFIPS)));
     END;

     EXPORT By_FIPS(UNSIGNED3 fips_in) := FUNCTION
          RETURN NCMECKey(primaryFIPS=fips_in); 
     END;
END;