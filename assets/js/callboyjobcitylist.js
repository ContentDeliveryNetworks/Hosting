const cities = [
"Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhupalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal–Malkajgiri","Mulugu","Nagarkurnool","Nalgonda","Narayanpet","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal","Hanamkonda","Yadadri Bhuvanagiri",
"Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad",
"Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kanchipuram","Kanniyakumari","Karur","Krishnagiri","Madurai","Mayiladuthurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar",
"Agar Malwa","Alirajpur","Anuppur","Ashok Nagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha",
"Ajmer","Alwar","Anupgarh","Balotra","Banswara","Baran","Barmer","Beawar","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Deeg","Dholpur","Didwana-Kuchaman","Dungarpur","Gangapur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur","Kotputli-Behror","Khairthal-Tijara",
"Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran (Motihari)","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur (Bhabua)","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran",
"Agra","Aligarh","Ambedkar Nagar","Amethi","Amroha","Auraiya","Ayodhya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Prayagraj","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Sant Ravidas Nagar","Shahjahanpur","Shamli","Shrawasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi",
"Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal",
"Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat","Hailakandi","Jorhat","Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","Tinsukia","Udalguri","West Karbi Anglong",
"Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad",
"Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada (South Bastar)","Dhamtari","Durg","Gariaband","Janjgir-Champa","Jashpur","Kanker (North Bastar)","Kawardha (Kabirdham)","Korba","Korea (Koriya)","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja","Gaurela-Pendra-Marwahi","Manendragarh","Baloda Bazar-Bhatapara","Khairagarh-Chhuikhadan-Gandai","Mohla-Manpur","Kharsia","Bagalkot","Bangalore Rural","Bangalore Urban","Belagavi (Belgaum)","Bellary (Ballari)","Bidar","Chamarajanagar","Chikballapur","Chikkamagaluru (Chikmagalur)","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi (Gulbarga)","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shivamogga (Shimoga)","Tumkur","Udupi","Uttara Kannada (Karwar)","Vijayapura (Bijapur)","Yadgir","Chikkaballapura","Ramanagara",
"Anantapur","Chittoor","East Godavari","Guntur","Kadapa (YSR Kadapa)","Kakinada","Kurnool","Nellore","Prakasam","Srikakulam","Tirupati","Visakhapatnam","Vizianagaram","West Godavari","Nandyal","Alluri Sitharama Raju","Annamayya","Bapatla","Eluru","Kondagaon","Palnadu","Parvathipuram Manyam","NTR","Sri Sathya Sai","Kovvur","Palasa","Anjaw","Bichom","Changlang","Dibang Valley","East Kameng","East Siang","Kamle","Keyi Panyor","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Papum Pare","Pakke-Kessang","Shi Yomi","Siang","Tawang","Tirap","Upper Dibang Valley","Upper Siang","Upper Subansiri","West Kameng","West Siang","Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Saraikela-Kharsawan","Simdega","West Singhbhum",
"Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Malerkotla","Mansa","Moga","Pathankot","Patiala","Rupnagar","S.A.S Nagar (Mohali)","Sangrur","Shaheed Bhagat Singh Nagar (Nawanshahr)","Sri Muktsar Sahib","Tarn Taran","Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar","Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi","Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una",
"East Khasi Hills","West Khasi Hills","South West Khasi Hills","Ri-Bhoi","East Jaintia Hills","West Jaintia Hills","East Garo Hills","West Garo Hills","South Garo Hills","North Garo Hills","South West Garo Hills","Eastern West Khasi Hills","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Hnahthial","Khawzawl","Saitual","Chümoukedima","Dimapur","Kiphire","Kohima","Longleng","Meluri","Mokokchung","Mon","Niuland","Noklak","Peren","Phek","Shamator","Tseminyü","Tuensang","Wokha","Zünheboto","Dhalai","Gomati","Khowai","North Tripura","Sipahijala","South Tripura","Unakoti","West Tripura","Gangtok","Mangan","Namchi","Gyalshing","Pakyong","Soreng","Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi","Chandigarh","Puducherry","Karaikal","Yanam","Mahe","Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kathua","Kishtwar","Kulgam","Kupwara","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur",
"Leh","Kargil","North Goa","South Goa","Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur (South Dinajpur)","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur (North Dinajpur)","Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonepur","Sundargarh"
];

const form = document.getElementById('searchForm');
const queryInput = document.getElementById('query');
const errorMsg = document.getElementById('errorMsg');
const resultTable = document.getElementById('resultTable');
const resultBody = document.getElementById('resultBody');


function getJobNumber(city) {
  const key = 'jobNum_' + city.toLowerCase().replace(/\s+/g, '_');
  let num = localStorage.getItem(key);
  if (!num) {
    num = Math.floor(Math.random() * (10000 - 4000 + 1)) + 4000;
    localStorage.setItem(key, num);
  }
  return num;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  errorMsg.classList.add('hidden');
  resultBody.innerHTML = '';
  resultTable.classList.add('hidden');

  const q = queryInput.value.trim();

  if (q.length < 3) {
    errorMsg.textContent = 'Please enter at least 3 characters.';
    errorMsg.classList.remove('hidden');
    return;
  }
  if (q.length > 20) {
    errorMsg.textContent = 'Please enter no more than 20 characters.';
    errorMsg.classList.remove('hidden');
    return;
  }

  const matches = cities.filter(city => city.toLowerCase().includes(q.toLowerCase()));

  if (matches.length === 0) {
    errorMsg.textContent = 'No City found matching search Result! Please check Name of city spelling search again or contact with us via email helloplayboys@gmail.com';
    errorMsg.classList.remove('hidden');
    return;
  }

  matches.forEach(city => {
    const jobNum = getJobNumber(city);
    const tr = document.createElement('tr');
    const result = document.createElement('result');
    result.innerHTML = `✔️${city} Call Boy Job Available!<br>Under ${city} ${jobNum} 👧 Client Available!`;
    tr.appendChild(result);
    resultBody.appendChild(tr);
  });

  resultTable.classList.remove('hidden');
});
