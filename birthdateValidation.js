let variable = "1/1/15";

function run(inputBirthdate) {
  try {
    
    const formattedInputDate = inputBirthdate.replace(/[^0-9]/g, "");
    
    let dataToReturn = false;
    if (formattedInputDate.length == 6 || formattedInputDate.length == 8) dataToReturn = formatDateWithoutSpace(formattedInputDate);
    
    const allFormatters = [" ", ".", "/", "-"];
    
    const dateInputTrimmed = inputBirthdate.replace(/  /g, "").trim();
    
    const findedFormatted = allFormatters.find((everyFormatter) => {
      return dateInputTrimmed.includes(everyFormatter);
    });
    
    const finalDataFormatted = typeof findedFormatted == "undefined" ? dataToReturn : formatDate(dateInputTrimmed, findedFormatted);
    
    if(typeof findedFormatted == "undefined" && !dataToReturn) return false;

    return finalDataFormatted ? finalDataFormatted : dataToReturn;
  } catch (e) {
    return "error";
  }
}

function formatDate(inputDate, identifier) {
  const date = inputDate.split(identifier);
  
  let dayFormatted = "";
  let monthFormatted = date[1];
  let yearFormatted = "";
  
  if (monthFormatted < 1 || monthFormatted > 12) return false;
  if (inputDate.match(/[^0-9 /.-]/g)) return false

  if (date[0] <= 31) {
    dayFormatted = date[0];
    yearFormatted = date[2];
  } else {
    dayFormatted = date[2];
    yearFormatted = date[0];
  }
  
  if (dayFormatted < 1 || dayFormatted > 31) return false;

  dayFormatted = dayFormatted.length < 2 ? "0" + dayFormatted : dayFormatted;
  
  monthFormatted = monthFormatted.length < 2 ? "0" + monthFormatted : monthFormatted;
  
  if(yearFormatted.length == 2) {
    if(yearFormatted > 23) yearFormatted = "19" + yearFormatted;
    else yearFormatted = "20" + yearFormatted;
  }
  
  if(yearFormatted.length != 4) return false

  const formattedData = `${dayFormatted}/${monthFormatted}/${yearFormatted}`;

  return formattedData;
}

function formatDateWithoutSpace(inputBirthdate) {
  
  if (inputBirthdate.slice(0, 2) <= 31 && inputBirthdate.slice(2, 4) <= 12) {
    
    if (inputBirthdate.length === 6) {
      inputBirthdate = inputBirthdate.slice(0, 2) + "/" + inputBirthdate.slice(2, 4) + "/" + inputBirthdate.slice(4, 6);
      const initialYear = inputBirthdate.slice(6,) > 23 ? 19 : 20 ;
      return inputBirthdate.match(/^(\d{2})\/(\d{2})\/(\d{2})$/) ? inputBirthdate.slice(0,6) + initialYear + inputBirthdate.slice(6) : false;
    } 
    else if (inputBirthdate.length === 8) {
      inputBirthdate = inputBirthdate.slice(0, 2) + "/" + inputBirthdate.slice(2, 4) + "/" + inputBirthdate.slice(4, 8);
      return inputBirthdate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/) ? inputBirthdate : false;
    }

  }

  return false;
}

console.log(run(variable));