IMPORT $,STD;
UpperIt(STRING txt) := Std.Str.ToUpperCase(txt);

EXPORT fn_FindHospital := MODULE
     SHARED Police            := $.File_CleanResponders.CleanHospitalIDX;

     EXPORT By_CityST(STRING23 city_in,STRING2  st_in)      := FUNCTION
           RETURN IF(st_in = '',
                     Police (city=UpperIt(city_in)),
                     Police (city=UpperIt(city_in),(state=UpperIt(st_in))));
     END;

     EXPORT By_FIPS(UNSIGNED3 fips_in) := FUNCTION
          RETURN Police(countyfips=fips_in); 
     END;
END;