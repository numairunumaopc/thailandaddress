import React from "react";
import { tumbolFilter } from "../../utils/raw";

export default function Testpage() {
  // Tumbol
  const tumbon = tumbolFilter.map((x, i) => {
    const tumbonResult = {
      id: i + 1,
      tambon_id: x.TambonID,
      amphure_id: x.DistrictID,
      zip_code: x.PostCodeMain,
      name_th: x.TambonThai,
      name_en: x.TambonEng,
    };
    return tumbonResult;
  });
  // End Tumbol

  // Aumphure
  const aumphureArr = tumbolFilter.map((x, i) => {
    const aumphureResult = {
      id: i + 1,
      aumphure_id: x.DistrictID,
      province_id: x.ProvinceID,
      name_th: x.DistrictThai,
      name_en: x.DistrictEng,
    };
    return aumphureResult;
  });

  const ids = aumphureArr.map((o) => o.aumphure_id);
  const aumphureFiltered = aumphureArr.filter(
    ({ aumphure_id }, index) => !ids.includes(aumphure_id, index + 1)
  );

  const aumphure = aumphureFiltered.map((x, i) => {
    const result = {
      id: i + 1,
      aumphure_id: x.aumphure_id,
      province_id: x.province_id,
      name_en: x.name_en,
      name_th: x.name_th,
    };
    return result;
  });
  // End  Aumphure

  // Province
  const provincesArr = tumbolFilter.map((x, i) => {
    const result = {
      id: i + 1,
      province_id: x.ProvinceID,
      name_th: x.ProvinceThai,
      name_en: x.ProvinceEng,
      geography_id:
        x.ภูมิภาคการท่องเที่ยวแห่งประเทศไทย === "ภาคเหนือ"
          ? "1"
          : x.ภูมิภาคการท่องเที่ยวแห่งประเทศไทย === "ภาคกลาง"
          ? "2"
          : x.ภูมิภาคการท่องเที่ยวแห่งประเทศไทย === "ภาคตะวันออกเฉียงเหนือ"
          ? "3"
          : x.ภูมิภาคการท่องเที่ยวแห่งประเทศไทย === "ภาคตะวันตก"
          ? "4"
          : x.ภูมิภาคการท่องเที่ยวแห่งประเทศไทย === "ภาคตะวันออก"
          ? "5"
          : x.ภูมิภาคการท่องเที่ยวแห่งประเทศไทย === "ภาคใต้"
          ? "6"
          : null,
    };
    return result;
  });

  const idsProvince = provincesArr.map((o) => o.province_id);
  const provincesFilter = provincesArr.filter(
    ({ province_id }, index) => !idsProvince.includes(province_id, index + 1)
  );
  const provinces = provincesFilter.map((x, i) => {
    const result = {
      id: i + 1,
      province_id: x.province_id,
      name_th: x.name_th,
      name_en: x.name_en,
      geography_id: x.geography_id,
    };
    return result;
  });

  console.log(`provinces`, provinces);
  console.log(`aumphure`, aumphure);
  console.log(`tumbon`, tumbon);

  return <div>Test</div>;
}
