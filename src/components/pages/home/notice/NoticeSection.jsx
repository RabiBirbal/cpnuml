import React from "react";
import Card from "@mui/material/Card";
import NoticeCard from "../../../forAll/NoticeCard";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const NoticeSection = ({ notices }) => {
  const navigate = useNavigate();
  return (
    <div className="notice-section ">
      <div className="contents">
        <div className="heading-wrapper">
          <div className="title">Notice</div>
          <div
            className="see-more"
            onClick={() => {
              navigate("/notice");
            }}
          >
            See more
          </div>
        </div>
        <div className="notice-wrapper">
          {notices &&
            notices.map((item) => {
              const { id = "", title = "", thumbnail = "" } = item;
              if (id === 0) {
                return (
                  <CardActionArea
                    key={id}
                    onClick={() => {
                      setTimeout(() => {
                        navigate("/notice-detail");
                      }, 100);
                    }}
                  >
                    <Card sx={{ display: "flex" }} className="big-card">
                      <Box
                        sx={{ display: "flex", flexDirection: "column" }}
                        className="content"
                      >
                        <img src={thumbnail} alt="" className="card-img" />
                        <div className="text-area">
                          <div className="title">{title}</div>
                        </div>
                      </Box>
                    </Card>
                  </CardActionArea>
                );
              } else {
                return "";
              }
            })}
          <div className="list-card">
            {notices &&
              notices.map((item) => {
                const { id = "", title = "", thumbnail = "" } = item;
                if (id !== 0) {
                  return (
                    <NoticeCard title={title} thumbnail={thumbnail} key={id} />
                  );
                } else {
                  return "";
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;

NoticeSection.defaultProps = {
  notices: [
    {
      id: 0,
      title: "नेपाल–भारत खुला सिमाना नियमन हुनुपर्छः महासचिव पोखरेल",
      thumbnail:
        "https://ennepalkhabar.prixacdn.net/media/gallery_folder/kp-oli_talAm49DjA.jpg",
      imgList: [
        "https://i0.wp.com/www.peoplesreview.com.np/wp-content/uploads/2020/03/oli-nepal-prachanda-madhav-kumar-nepal-kp-oli-puspakamaldahal.jpg?resize=961%2C614&ssl=1",
        "https://www.space4ktv.com/storage/photos/28/kp-oli1679045615.webp",
        "https://en.setopati.com/uploads/posts/725X460/Oli-1710241632.jpg",
      ],
      desc: "बीरगञ्ज । नेकपा (एमाले)का महासचिव शंकर पोखरेलले नेपाल–भारत  सम्बन्ध घनिष्ट र मित्रवत् हुनुपर्ने वताउनुभएको छ । नेपाल बुद्धिजीवी परिषद् मधेश प्रदेशद्वारा २०८० भदौ २ गते  बीरगञ्जमा आयोजित ‘नेपाल–भारत खुला सिमाना, राष्ट्रका लागि अवसर वा चुनौती’ बिषयक अन्तर्क्रियामा बोल्दै महासचिव पोखरेलले छिमेकीसँगको मित्रवत् सम्बन्ध नेपाल र नेपालीको प्राथमिकताको विषय भएको वताउनुभयो । महासचिव पोखरेलले दुई देशबीचको सम्बन्धलाई सम्मानित र घनिष्ट बनाउन स्वाभिमानी नेपालीसँगको व्यवहार समान हुनुपर्ने धारणा राख्नुभयो । महासचि पोखरेलले दुई देशबीचको खुला सिमानालाई नियमन गर्नुपर्ने विचार व्यक्त गर्नुभयो । नेपाल–भारतबीच खुला सिमाना भनिए पनि नेपालीका लागि खुला नभई नियन्त्रित रहेको कुरा सबै नेपालीले बुझ्नुपर्ने उहाँको भनाइ छ । महासचिव पोखरेलले नेपाली बस्तु तथा कृषि उत्पादन भारत निकासीका लागि शर्त रहेको हुँदा सीमा नियन्त्रित छ भन्ने कुरालाई बुझाउँछ भन्नुभयो । उहाँले भन्नुभयो– यहाँसम्मकी हाम्रो कृषि उत्पादनमा समेत शर्त रहेको छ । चिया, अलैची, अदुवा के चिज खुला र सहजै जान्छ भारतीय बजारमा ? सबैमा नियन्त्रण छ । अदुवा लगायत कृषि उत्पादनमा शर्त छ । महासचिव पोखरेलले सन् १९५० को असमान सन्धिका कारण यस्तो भएको वताउँदै भारतीय शासकको दबाबमा नेपालका राणा प्रधानमन्त्रीले सत्ता जोगाउन उक्त सन्धिमा हस्ताक्षर गरेको वताउनुभयो । भारत आफ्नो सामथ्र्यका कारण के चिज देशमा भित्रन दिने र के नदिने भन्ने निर्णय गर्न सक्ने तर नेपालले कमजोर सामथ्र्यका कारण त्यसो गर्न नसक्ने उहाँको भनाइ छ । महासचिव पोखरेलले भन्नुभयो– नेपाली उत्पादन भारत निकासीका लागि शर्त राखिएका छन्, त्यस अर्थमा सीमा नियन्त्रित छ । जति हामी सजिलै खुला छ भनिरहेका छौं, खुला छैन, नेपालीका लागि नियन्त्रित छ । यो सत्यलाई हामीले बुझ्नुपर्छ । भारतीय नागरिकका हकमा भने धेरै हदसम्म सीमा खुला रहेको वताउँदै महासचिव पोखरेलले खुला सीमाको समान लाभ प्राप्त गरिरहेका छौं भन्ने कुरा तथ्यले मान्दैन भन्नुभयो । उहाँले भन्नुभयो– हामीले भारत श्रम निर्यात गर्ने गन्तव्य हो भन्ने बुझ्छौं तर नेपालीहरूले भारत गएर कमाउने पैसाको दोब्बर भारतीयहरूले नेपालमा आएर कमाएर लैजान्छन् । यो तथ्यले देखाउँछ । महासचिव पोखरेलले भन्नुभयो– सन् १९५० को सन्धिका कारण खुला सिमानामा हामी एकप्रकारले अनुबन्धित जस्ता भएका छौं । सन्धि सामान्य बेलामा भएको होइन, नेपाली शासकहरूको विवेक प्रयोग गरेर भएको होइन । नेपाली कांग्रेसको नेतृत्वमा मुक्ति सेनाको अगुवाईमा सशस्त्र विद्रोह भइरहेको बेलामा सीमाबर्ती क्षेत्रका बजारमा मुक्ति सेनाले कब्जा गरेपछि राणा प्रधानमन्त्रीलाई दिल्ली बोलाएर सत्ता अन्त्यको त्रास देखाएर गरिएको सम्झौता हो । नेपाल राष्ट्रको आवश्यकताले भएको सम्झौता हो भन्ने भनिन्छ भने त्यो भ्रमपूर्ण कुरा हो । ‘बाध्यतामा पारेर गरिएको सम्झौता भएकाले सन् १९५० को सन्धिले स्वाभाविक रूपमा नेपालका पक्षका हितभन्दा भारतीय हितका पक्षहरूलाई बढी बोकेको छ । त्यसकारण हामी बढी उदार भएर दुबै देशका लागि उत्तिकै महत्वपूर्ण छ भन्ने ढङ्गले विवेचना गर्दछौं भने यो सत्य कुरा होइन ।’ नेकपा (एमाले) नेपाल र भारतबीचको खुला सिमानालाई नियमन गर्नुपर्छ भन्ने मान्यतामा रहेको स्पष्ट गर्दै महासचिव पोखरेलले नेपाल र भारतका प्रबुद्ध समूहद्वारा तयार गरिएको इपीजी प्रतिवेदनमा पनि नेपाल–भारत सम्बन्धका अन्य विषयसँगै खुला सिमाना नियमनको सुझाव पनि रहेकोे वताउनुभयो । उहाँले भन्नुभयो– हाम्रो पार्टीका अध्यक्ष केपी शर्मा ओली प्रधानमन्त्री भएका बखत दुई देशका विज्ञहरू रहेको प्रबुद्ध समूह गठन गरी तयार गरिएको इपीजी प्रतिवेदनमा नेपाल–भारत सम्बन्धका सन्दर्भमा दुई देशका प्रवुद्ध व्यक्तिको दृष्टिकोण के हो भन्ने कुरा छ । त्यो प्रतिवेदन भारतीय पक्षले बुझ्न नमानेका कारण अहिले त्यतिकै थन्किएको अवस्था छ । त्यो प्रतिवेदनमा खुला सिमानाका सम्बन्धमा पनि हाम्रो दृष्टिकोण छ । यद्यपि प्रतिवेदन सार्वजनिक नभएका कारण त्यसमा रहेका कुरा आधिकारिक रूपमा उद्धृत गर्नु गाह्रो विषय हो । तर पनि हामी खुला सिमानाको नियमनका पक्षमा छौं । प्रतिवेदनले त्यस कुरालाई आत्मसात गरेको छ । यसमा नेपाली पक्षको मात्र होइन, भारतीय पक्षका प्रबुद्ध व्यक्तिले पनि सहमति छ । महासचिव पोखरेलले खुला सिमानाका चुनौतीको सबभन्दा ज्यादा प्रभाव दुई देशका सीमावर्ती क्षेत्रका जनताले भोग्नुपर्ने हुँदा उनीहरूको हित र सुरक्षाका प्रश्नमा संवेदनशील हुनुपर्छ भन्नुभयो ।  नेपाल भारत सम्बन्धका विभिन्न पक्षका बारेमा चर्चा गर्दै महासचिव पोखरेलले विगतमा शान्ति सुरक्षा, सामाजिक सुरक्षाका दृष्टिले भारतका चेलीहरूको विवाह नेपालको तराई मधेशमा गरिदिने आकर्षण रहेको थियो तर त्यो अवस्था मधेश आन्दोलनपछि नरहेको भनाइ राख्नुभयो । मधेश आन्दोलनमा उठाइएका मुद्दाका कारण नभई आन्दोलनमा अपनाइएको तरिकाका कारण यस्तो भएको आफ्नो बुझाई रहेको महासचिव पोखरेले वताउनुभयो । उहाँले तराई मधेशमा सामाजिक अराजकता बढेका कारण महिला हिंसाका घटनामा पनि बृद्धि भएको र शान्ति सुरक्षाका पक्षमा नेपाली समाज सुरक्षित छ भन्ने मान्यता मधेश आन्दोलनपछि गुमाएको विश्लेषण सुनाउनुभयो । उहाँले भारतीय सामान तेस्रो मुलुकको व्यापारका लागि बन्द रहेका कारण भारतीयहरू तेस्रो मुलुकका सामान किन्न नेपाल आउने अवस्था पनि अहिले नरहेको वताउनुभयो । अपराध नियन्त्रणका सन्दर्भमा, हामीले हाम्रो देशमा हुने अपराधका घटनामा भारतमा लुकेर बसेको छ भने नेपाल प्रहरीले भारतीय पक्षको पर्याप्त सहयोग विना पक्राउ गर्न सक्दैन । तर भारतीय पक्षले नेपालमा अपराधी छ भन्ने ठान्यो भने नेपाली पक्षलाई जानकारी नदिई पनि पक्राउ गरेको छ । यसमा पनि खुला सिमानाका कारण समान व्यवहार छैन । भारतीय नम्बर प्लेटका गाडि नेपालमा निर्वाधरूपमा चल्न पाउँछन् । नेपालीका गाडि भारतमा निर्वाध चल्न पाउँदैनन् । खुला सीमाका अवसर र चुनौतीका बारेमा विमर्श गर्दा हामीले नेपालीको आँखाबाट हेर्नुपर्छ । अर्को, खुला सिमानाका कारण नेपालले भारतसँग व्यापार गर्न पाएको होइन, व्यापार सम्बन्धित मुलुकको आवश्यकता हो, हाम्रो आवश्यकता होइन । हामी त क्रेताका रूपमा जहाँ सस्तो छ त्यहाँबाट ल्याउन सक्छौं । भूपरिवेष्टित मुलुकका लागि तेस्रो मुलुकसम्म जाने पारबहनको अधिकार अन्तर्राष्ट्रिय अधिकार हो । बेला बखत हाम्रो त्यो अधिकार पनि अनेक बहानामा रोकिने गरेको छ । नेपाल–भारत सम्बन्ध खुला सिमानाको विषयमात्र होइन भन्दै उहाँले भन्नुभयो– समग्रतामा नेपाल–भारत बीच घनिष्ट सम्बन्ध अत्यन्त आवश्यका छ । किनकी हामी छिमेकी बदल्न सक्दैनौं । छिमेकीसँग मित्रवत सम्बन्ध नेपाल र नेपालीको प्राथमिकताको विषय हो । त्यसलाई सम्मानित बनाउन सम्बन्धलाई स्वाभिमानी नेपाली नागरिकसँगको व्यवहार समान हुनुपर्छ । ",
    },
    {
      id: 1,
      title: "सुन तस्करी प्रकरणः जाँचबुझ आयोग गठन गर्ने सहमति ",
      thumbnail:
        "https://th-i.thgim.com/public/news/international/1s19rk/article33924590.ece/alternates/FREE_1200/vbk-sharma-oli-gettyimages",
      imgList: [
        "https://i0.wp.com/www.peoplesreview.com.np/wp-content/uploads/2020/03/oli-nepal-prachanda-madhav-kumar-nepal-kp-oli-puspakamaldahal.jpg?resize=961%2C614&ssl=1",
        "https://www.space4ktv.com/storage/photos/28/kp-oli1679045615.webp",
        "https://en.setopati.com/uploads/posts/725X460/Oli-1710241632.jpg",
      ],
      desc: "काठमाडौं । सुन तस्करी प्रकरणको स्वतन्त्र तथा निष्पक्ष छानविन, हुँदै र  भइरहेका छानविनको अध्ययन गर्न र तस्करीजन्य गतिविधि नियन्त्रणका लागि आवश्यक सुझाव दिन जाँचबुझ आयोग गठन हुने भएको छ । त्रिभुवन अन्तर्राष्ट्रिय विमानस्थलबाट गत साउन २ गते ब्रेक सुका नाममा क्वीन्टलभन्दा बढी सुन भित्रिएर सिनामङ्गलमा बरामद गरिएपछि नेकपा (एमाले) ले सुन तस्करीको स्वतन्त्र र निष्पक्ष छानविनका लागि उच्चस्तरीय आयोग/समिति गठन गर्नुुपर्ने माग गर्दै आएको थियो । प्रधानमन्त्री तथा मन्त्रिपरिषद्को कार्यालय सिंहदरबारमा बुधबार बसेको प्रतिनिधि सभामा प्रतिनिधित्व गर्ने राष्ट्रिय  मान्यता  प्राप्त  दलहरूको बैठकमा सुन लगायत तस्करीजन्य  कार्य  पूर्णरूपमा  नियन्त्रणका  लागि  सुझावसहितको  प्रतिवेदन पेस गर्नेगरी जाँझबुझ आयोग गठन गर्ने सहमति भएको हो । प्रधानमन्त्री पुष्पकमल दाहाल ‘प्रचण्ड’, नेकपा (एमाले) का अध्यक्ष केपी शर्मा ओली, नेपाली कांग्रेसका सभापति शेरबहादुर देउवा लगायत सात दलका प्रमुख र प्रमुख सचेतक सम्मिलित बैठकमा आगामी असोज ५ गते आयोग गठन गर्ने र सोही दिनबाट आयोगले काम सुरु गर्ने सहमति भएको छ । नेकपा (एमाले)ले सर्वसाधारण नागरिकका जुत्ता, घडि, पेटी, पर्स र मोवाइल समेत खोलेर सुरक्षा जाँचपास गरिने विमानस्थल भन्सारबाट क्वीण्टलभन्दा बढी परिमाणको सुन ‘ब्रेक सु’का नाममा भित्रिनुमा सरकारी संयन्त्रको मिलोमतो विना सम्भव नभएको भन्दै उच्चस्तरीय छानविन आयोग गठनको माग गर्दै आएको थियो । त्यस अघि पनि पटक पटक ‘ब्रेक सु’ आयात भएको देखिएको र साढे नौ किलो इलेक्ट्रिक चुरोट(भेप्स)भित्र लुकाएर ल्याएको सुन विमानस्थल भन्सारको गोदामबाट हराएको विषय छानविनका लागि नेकपा (एमाले)ले संसदमा आवाज उठाउँदै आएको थियो । सुन तस्करीमा सत्ता गठबन्धन दलका नेताहरूको नामसमेत जोडिएर आएको र सरकारले आयोग गठन गर्न सहमत नभएका कारण संसद बैठक अबरुद्ध हुँदै आएको थियो । जाँचबुझ आयोग गठनको सहमतिपछि संसद सुचारु भएको छ । दलहरूबीच भएको सहमति यस प्रकार छः ",
    },
    {
      id: 2,
      title: "सुन तस्करीमा सत्ता संरक्षित अन्तर्राष्ट्रिय गिरोहः अध्यक्ष ओली ",
      thumbnail:
        "https://th-i.thgim.com/public/news/international/1s19rk/article33924590.ece/alternates/FREE_1200/vbk-sharma-oli-gettyimages",
      imgList: [
        "https://i0.wp.com/www.peoplesreview.com.np/wp-content/uploads/2020/03/oli-nepal-prachanda-madhav-kumar-nepal-kp-oli-puspakamaldahal.jpg?resize=961%2C614&ssl=1",
        "https://www.space4ktv.com/storage/photos/28/kp-oli1679045615.webp",
        "https://en.setopati.com/uploads/posts/725X460/Oli-1710241632.jpg",
      ],
      desc: "काठमाडौं । नेकपा (एमाले)का अध्यक्ष केपी शर्मा ओलीले वर्तमान सरकार भ्रष्ट सरकार दुनियाँमा कतै नभएको बताउनुभएको छ । नेकपा (एमाले) केन्द्रीय कार्यालय, च्यासलमा आज आयोजित कार्यक्रममा सम्वोधन गर्दै अध्यक्ष ओलीले यस्तो बताउनुभएको हो ।  ‘साधारण जनताले एउटा सानो थैली लिएर जाँदा पनि जाँच हुन्छ । महिलाहरूका  बुलाकी, ढुङ्ग्री, मुन्द्री जाँच गर्छ । अनि क्वीटल सुन आउँदा सजिलै पास हुन्छ, अध्यक्ष ओलीले प्रश्न गर्नुभयो– सुन तस्करी वर्तमान सरकारले नगराएको भए कस्ले गरायो ? उहाँले भन्नुभयो– यो सरकारका पालामै तीन हजार केजीभन्दा बढी सुन तस्करी भएको  छ, त्यो सरकारको संलग्नताविना कसरी सम्भव हुन्छ ? सुन तस्करीमा सत्ता संरक्षित अन्तर्राष्ट्रिय गिरोह रहेकाले नेकपा (एमाले)ले निष्पक्ष छानविन गर्न आयोग बनाऔँ भनेको अध्यक्ष ओलीले स्पष्ट गर्नुभयो ।  नेकपा (एमाले)लाई डेमोक्रेसीको मतलब छैन भनेर हल्ला गर्नेहरूलाई उहाँले प्रश्न गर्नुभयो– के सुन खानेहरूलाई डेमोक्रेसीको मतलब छ ? तस्करहरूलाई डेमोक्रेसीको मतलब छ ? हामीलाई छैन ? ‘माओवादीको एउटा डफ्फाको काम नै यस्तै खालका क्रियाकलाप गर्ने हो’, उहाँले भन्नुभयो– बदमासी काम आफू गर्ने अनि हल्ला अर्काेतिर चलाइ दिने । सोझा नेपाली जनता हल्लाका पछि कुद्छन् ।  अहिले नेकपा (एमाले)ले संसद चल्न दिएन भनेर हल्ला चलाउने काम समेत माओवादीले गरेको भन्दै अध्यक्ष ओलीले असन्तुष्टि व्यक्त गर्नुभयो ।  ‘हामीले त यो तस्करी रोक्नु पर्यो भनेको हो । सियो पनि छिर्न नसक्ने विमानस्थलबाट क्वीन्टलका क्वीन्टल सुन कसरी आउँछ ?’ उहाँले तस्करीमा केही कुरा नमिलेपछि बेलाबखत बर्तमान सरकारले सुन समात्ने गरेको बताउनुभयो । नेकपा (एमाले) संसद चलाऔं, संसदमा राम्रो कामको छलफल होस् भन्ने पक्षमा रहेको भन्दै त्यो सम्भव नभएको भनाइ अध्यक्ष ओलीले राख्नुभयो । ‘संसद माओवादीको झुट, बेइमानी, फट्याईका कारण अवरुद्ध भैरहेको छ । संसद माओवादीको वकवास गर्ने थलो भएको छ,’ उहाँले भन्नुभयो– संसद भनेको जनताको कुरा सुन्ने ठाउँ हो । देशका समस्या के छने ? देशको विकास कसरी गर्न सकिन्छ ? भनेर छलफल गर्ने थलो हो ।  संसदमा एमालेले कुरा उठाउँदा सत्ता पक्ष उठेर हल्ला गरेर कुरा राख्नै दिँदैन । भ्रष्टाचारी, सुन तस्करीका बारेमा बोल्नै दिदैँन । साढे ९ केजी सुन गायव भएको बारेमा बोल्नै दिँदैन । यस्तो संसद सायद दुनियाँ कतै छैन । कार्यक्रममा केन्द्रीय सदस्यमा मनोनीत हुनुभएका छक्कबहादुर लामाले शपथ ग्रहण गर्नुभएको थियो । ",
    },
    {
      id: 3,
      title: "‘सरकार भ्रष्टाचारी र तस्करको संरक्षक हो भन्ने पुष्टी भएको छ’ ",
      thumbnail:
        "https://www.space4ktv.com/storage/photos/28/kp-oli1679045615.webp",
      imgList: [
        "https://i0.wp.com/www.peoplesreview.com.np/wp-content/uploads/2020/03/oli-nepal-prachanda-madhav-kumar-nepal-kp-oli-puspakamaldahal.jpg?resize=961%2C614&ssl=1",
        "https://www.space4ktv.com/storage/photos/28/kp-oli1679045615.webp",
        "https://en.setopati.com/uploads/posts/725X460/Oli-1710241632.jpg",
      ],
      desc: "विराटनगर । नेकपा (एमाले)का सचिव रघुबीर महासेठले वर्तमान सरकार योजना बनाएरै तस्करीमा लागेको वताउनुभएको छ । एमालेलाई बदनाम गराउन सरकारले गरेका सबै हतकण्डा बिफल भएको वताउँदै सचिव महासेठले सरकार तस्कर र भ्रष्टाचारीको संरक्षक रहेको तथ्य प्रमाणित भइसकेको बताउनुभयो । नेकपा (एमाले) कोशी प्रदेशको प्रचार तथा प्रकाशन विभागले  विराटनगरमा आज आयोजना गरेको योजना तर्जुमा तथा प्रचार कार्यशालामा बोल्दै कोशी प्रदेशका इञ्चार्जसमेत रहनुभएका सचिव महासेठले सरकार योजना बनाएरै तस्करीमा लागेको पुष्टि भइसकेको बताउनु भयो । उहाँले भन्नुभयो– यो सरकार आफ्नो तस्करी धन्दा अघि बढाउन हरेक कुरामा एमालेतिर आरोप लगाएर जनताको ध्यान मोड्न खोज्दै छ, हामी सबै एकजुट भएर यो अपराधको भण्डाफोर गर्नुपर्छ । सचिव महासेठले सुन तस्करीको घटनाले सरकारको सबै पोल खोलेको र अहिले प्रहरी सरुवा गरेर सरकार अपराधीको संरक्षक बनेको बताउनुभयो । उहँले भन्नुभयो–प्रहरीको सरुवाबाट सुन तस्करीदेखि भुटानी शरणार्थी प्रकरणसम्मका घटनामा गृहमन्त्रीकोे संलग्नता छ भन्ने प्रमाणित भयो । ललिता निवास प्रकरणमा पनि सरकारले अपराधीलाई संरक्षण गर्ने काम गर्यो । अपराध र अपराधीलाई जोगाउनेतिर मात्रै सरकारको ध्यान गएको छ । पार्टी अध्यक्ष केपी ओलीमाथि भइरहेको सुनियोजित हमलाको जस्ताको तस्तै जवाफ दिने बेला आएको बताउँदै सचिव महासेठले भन्नुभयो– हाम्रो पार्टीका अध्यक्ष कामरेडबिरुद्धको आक्रमण स्वाभिमानको लडाई कमजोर बनाउन, बलियो राष्ट्रिय शक्ति बन्न नदिन र बिदेशीको गुलामी गरिरहनुपर्छ भन्ने सन्देश दिनका लागि हो । वर्तमान सरकारले त्यही गरिरहेको छ । उहाँले सरकारको कारण मुलुकको आर्थिक अवस्था अत्यन्तै खस्किएको बताउनुभयो । कार्यक्रममा पार्टीका स्थायी कमिटी सदस्य तथा केन्द्रीय प्रचार विभाग प्रमुख राजेन्द्र गौतमले प्रधानमन्त्री पुष्पकमल दाहाल प्रचण्ड नेतृत्वको सरकारलाई इतिहासकै सबैभन्दा नालायक र भष्ट्राचारीहरूको सरकारको संज्ञा दिनुभयो । प्रमुख गौतमले भन्नुभयो– यो सरकारले भ्रष्टाचारका जति पनि फाइल खोल्यो, ती सबै नाटक हुन् भन्ने प्रमाणित भयो, ललिता निवास प्रकरण, नक्कली भुटानी शरणार्थी प्रकरण र सुन तस्करी काण्डमा सरकारको ब्यवहारले यो इतिहासकै सवैभन्दा कलङ्कित सरकार हो भन्ने तथ्य उजागर भएको छ । सुन तस्करको उच्चस्तरीय छानविन किन चाहियो भन्ने कुरा सरकारको ब्यवहारले नै प्रष्ट पारिसकेको वताउँदै गौतमले भन्नुभयो– प्रहरी संगठनभित्र भएको हठात् सरुवाले सरकार अपराधी जोगाउने सुनियोजित धन्दामा लागेको छ भन्ने प्रमाणित गरेको छ । उहाँले सुन तस्करीमा पनि सरकार मुल मान्छे जोगाउनका लागि परेको बताउनुभयो । त्यस्तै, स्थायी कमिटी सदस्य तथा कोशी प्रदेशका निवर्तमान मुख्यमन्त्री नेकपा (एमाले) र यसको मुल नेतृत्वविरुद्धको आक्रमण यत्तिमा मात्र सीमित नभई नेपालको सार्वभौमसत्ताका विरुद्धमा भएको आफ्नो अनुभूति रहेको वताउनुभयो । उहाँले मुलुकको राष्ट्रियता बलियो हुने, सार्वभौमसत्ताको रक्षा गर्ने कुरा नेकपा (एमाले) को योजनामा निर्भर रहने धारणा राख्नुभयो । ",
    },
    {
      id: 4,
      title: "नेपाल–भारत खुला सिमाना नियमन हुनुपर्छः महासचिव पोखरेल",
      thumbnail:
        "https://en.setopati.com/uploads/posts/725X460/Oli-1710241632.jpg",
      imgList: [
        "https://i0.wp.com/www.peoplesreview.com.np/wp-content/uploads/2020/03/oli-nepal-prachanda-madhav-kumar-nepal-kp-oli-puspakamaldahal.jpg?resize=961%2C614&ssl=1",
        "https://www.space4ktv.com/storage/photos/28/kp-oli1679045615.webp",
        "https://en.setopati.com/uploads/posts/725X460/Oli-1710241632.jpg",
      ],
      desc: "बीरगञ्ज । नेकपा (एमाले)का महासचिव शंकर पोखरेलले नेपाल–भारत  सम्बन्ध घनिष्ट र मित्रवत् हुनुपर्ने वताउनुभएको छ । नेपाल बुद्धिजीवी परिषद् मधेश प्रदेशद्वारा २०८० भदौ २ गते  बीरगञ्जमा आयोजित ‘नेपाल–भारत खुला सिमाना, राष्ट्रका लागि अवसर वा चुनौती’ बिषयक अन्तर्क्रियामा बोल्दै महासचिव पोखरेलले छिमेकीसँगको मित्रवत् सम्बन्ध नेपाल र नेपालीको प्राथमिकताको विषय भएको वताउनुभयो । महासचिव पोखरेलले दुई देशबीचको सम्बन्धलाई सम्मानित र घनिष्ट बनाउन स्वाभिमानी नेपालीसँगको व्यवहार समान हुनुपर्ने धारणा राख्नुभयो । महासचि पोखरेलले दुई देशबीचको खुला सिमानालाई नियमन गर्नुपर्ने विचार व्यक्त गर्नुभयो । नेपाल–भारतबीच खुला सिमाना भनिए पनि नेपालीका लागि खुला नभई नियन्त्रित रहेको कुरा सबै नेपालीले बुझ्नुपर्ने उहाँको भनाइ छ । महासचिव पोखरेलले नेपाली बस्तु तथा कृषि उत्पादन भारत निकासीका लागि शर्त रहेको हुँदा सीमा नियन्त्रित छ भन्ने कुरालाई बुझाउँछ भन्नुभयो । उहाँले भन्नुभयो– यहाँसम्मकी हाम्रो कृषि उत्पादनमा समेत शर्त रहेको छ । चिया, अलैची, अदुवा के चिज खुला र सहजै जान्छ भारतीय बजारमा ? सबैमा नियन्त्रण छ । अदुवा लगायत कृषि उत्पादनमा शर्त छ । महासचिव पोखरेलले सन् १९५० को असमान सन्धिका कारण यस्तो भएको वताउँदै भारतीय शासकको दबाबमा नेपालका राणा प्रधानमन्त्रीले सत्ता जोगाउन उक्त सन्धिमा हस्ताक्षर गरेको वताउनुभयो । भारत आफ्नो सामथ्र्यका कारण के चिज देशमा भित्रन दिने र के नदिने भन्ने निर्णय गर्न सक्ने तर नेपालले कमजोर सामथ्र्यका कारण त्यसो गर्न नसक्ने उहाँको भनाइ छ । महासचिव पोखरेलले भन्नुभयो– नेपाली उत्पादन भारत निकासीका लागि शर्त राखिएका छन्, त्यस अर्थमा सीमा नियन्त्रित छ । जति हामी सजिलै खुला छ भनिरहेका छौं, खुला छैन, नेपालीका लागि नियन्त्रित छ । यो सत्यलाई हामीले बुझ्नुपर्छ । भारतीय नागरिकका हकमा भने धेरै हदसम्म सीमा खुला रहेको वताउँदै महासचिव पोखरेलले खुला सीमाको समान लाभ प्राप्त गरिरहेका छौं भन्ने कुरा तथ्यले मान्दैन भन्नुभयो । उहाँले भन्नुभयो– हामीले भारत श्रम निर्यात गर्ने गन्तव्य हो भन्ने बुझ्छौं तर नेपालीहरूले भारत गएर कमाउने पैसाको दोब्बर भारतीयहरूले नेपालमा आएर कमाएर लैजान्छन् । यो तथ्यले देखाउँछ । महासचिव पोखरेलले भन्नुभयो– सन् १९५० को सन्धिका कारण खुला सिमानामा हामी एकप्रकारले अनुबन्धित जस्ता भएका छौं । सन्धि सामान्य बेलामा भएको होइन, नेपाली शासकहरूको विवेक प्रयोग गरेर भएको होइन । नेपाली कांग्रेसको नेतृत्वमा मुक्ति सेनाको अगुवाईमा सशस्त्र विद्रोह भइरहेको बेलामा सीमाबर्ती क्षेत्रका बजारमा मुक्ति सेनाले कब्जा गरेपछि राणा प्रधानमन्त्रीलाई दिल्ली बोलाएर सत्ता अन्त्यको त्रास देखाएर गरिएको सम्झौता हो । नेपाल राष्ट्रको आवश्यकताले भएको सम्झौता हो भन्ने भनिन्छ भने त्यो भ्रमपूर्ण कुरा हो । ‘बाध्यतामा पारेर गरिएको सम्झौता भएकाले सन् १९५० को सन्धिले स्वाभाविक रूपमा नेपालका पक्षका हितभन्दा भारतीय हितका पक्षहरूलाई बढी बोकेको छ । त्यसकारण हामी बढी उदार भएर दुबै देशका लागि उत्तिकै महत्वपूर्ण छ भन्ने ढङ्गले विवेचना गर्दछौं भने यो सत्य कुरा होइन ।’ नेकपा (एमाले) नेपाल र भारतबीचको खुला सिमानालाई नियमन गर्नुपर्छ भन्ने मान्यतामा रहेको स्पष्ट गर्दै महासचिव पोखरेलले नेपाल र भारतका प्रबुद्ध समूहद्वारा तयार गरिएको इपीजी प्रतिवेदनमा पनि नेपाल–भारत सम्बन्धका अन्य विषयसँगै खुला सिमाना नियमनको सुझाव पनि रहेकोे वताउनुभयो । उहाँले भन्नुभयो– हाम्रो पार्टीका अध्यक्ष केपी शर्मा ओली प्रधानमन्त्री भएका बखत दुई देशका विज्ञहरू रहेको प्रबुद्ध समूह गठन गरी तयार गरिएको इपीजी प्रतिवेदनमा नेपाल–भारत सम्बन्धका सन्दर्भमा दुई देशका प्रवुद्ध व्यक्तिको दृष्टिकोण के हो भन्ने कुरा छ । त्यो प्रतिवेदन भारतीय पक्षले बुझ्न नमानेका कारण अहिले त्यतिकै थन्किएको अवस्था छ । त्यो प्रतिवेदनमा खुला सिमानाका सम्बन्धमा पनि हाम्रो दृष्टिकोण छ । यद्यपि प्रतिवेदन सार्वजनिक नभएका कारण त्यसमा रहेका कुरा आधिकारिक रूपमा उद्धृत गर्नु गाह्रो विषय हो । तर पनि हामी खुला सिमानाको नियमनका पक्षमा छौं । प्रतिवेदनले त्यस कुरालाई आत्मसात गरेको छ । यसमा नेपाली पक्षको मात्र होइन, भारतीय पक्षका प्रबुद्ध व्यक्तिले पनि सहमति छ । महासचिव पोखरेलले खुला सिमानाका चुनौतीको सबभन्दा ज्यादा प्रभाव दुई देशका सीमावर्ती क्षेत्रका जनताले भोग्नुपर्ने हुँदा उनीहरूको हित र सुरक्षाका प्रश्नमा संवेदनशील हुनुपर्छ भन्नुभयो ।  नेपाल भारत सम्बन्धका विभिन्न पक्षका बारेमा चर्चा गर्दै महासचिव पोखरेलले विगतमा शान्ति सुरक्षा, सामाजिक सुरक्षाका दृष्टिले भारतका चेलीहरूको विवाह नेपालको तराई मधेशमा गरिदिने आकर्षण रहेको थियो तर त्यो अवस्था मधेश आन्दोलनपछि नरहेको भनाइ राख्नुभयो । मधेश आन्दोलनमा उठाइएका मुद्दाका कारण नभई आन्दोलनमा अपनाइएको तरिकाका कारण यस्तो भएको आफ्नो बुझाई रहेको महासचिव पोखरेले वताउनुभयो । उहाँले तराई मधेशमा सामाजिक अराजकता बढेका कारण महिला हिंसाका घटनामा पनि बृद्धि भएको र शान्ति सुरक्षाका पक्षमा नेपाली समाज सुरक्षित छ भन्ने मान्यता मधेश आन्दोलनपछि गुमाएको विश्लेषण सुनाउनुभयो । उहाँले भारतीय सामान तेस्रो मुलुकको व्यापारका लागि बन्द रहेका कारण भारतीयहरू तेस्रो मुलुकका सामान किन्न नेपाल आउने अवस्था पनि अहिले नरहेको वताउनुभयो ।  अपराध नियन्त्रणका सन्दर्भमा, हामीले हाम्रो देशमा हुने अपराधका घटनामा भारतमा लुकेर बसेको छ भने नेपाल प्रहरीले भारतीय पक्षको पर्याप्त सहयोग विना पक्राउ गर्न सक्दैन । तर भारतीय पक्षले नेपालमा अपराधी छ भन्ने ठान्यो भने नेपाली पक्षलाई जानकारी नदिई पनि पक्राउ गरेको छ । यसमा पनि खुला सिमानाका कारण समान व्यवहार छैन । भारतीय नम्बर प्लेटका गाडि नेपालमा निर्वाधरूपमा चल्न पाउँछन् । नेपालीका गाडि भारतमा निर्वाध चल्न पाउँदैनन् । खुला सीमाका अवसर र चुनौतीका बारेमा विमर्श गर्दा हामीले नेपालीको आँखाबाट हेर्नुपर्छ । अर्को, खुला सिमानाका कारण नेपालले भारतसँग व्यापार गर्न पाएको होइन, व्यापार सम्बन्धित मुलुकको आवश्यकता हो, हाम्रो आवश्यकता होइन । हामी त क्रेताका रूपमा जहाँ सस्तो छ त्यहाँबाट ल्याउन सक्छौं । भूपरिवेष्टित मुलुकका लागि तेस्रो मुलुकसम्म जाने पारबहनको अधिकार अन्तर्राष्ट्रिय अधिकार हो । बेला बखत हाम्रो त्यो अधिकार पनि अनेक बहानामा रोकिने गरेको छ ।  नेपाल–भारत सम्बन्ध खुला सिमानाको विषयमात्र होइन भन्दै उहाँले भन्नुभयो– समग्रतामा नेपाल–भारत बीच घनिष्ट सम्बन्ध अत्यन्त आवश्यका छ । किनकी हामी छिमेकी बदल्न सक्दैनौं । छिमेकीसँग मित्रवत सम्बन्ध नेपाल र नेपालीको प्राथमिकताको विषय हो । त्यसलाई सम्मानित बनाउन सम्बन्धलाई स्वाभिमानी नेपाली नागरिकसँगको व्यवहार समान हुनुपर्छ । ",
    },
    {
      id: 5,
      title: "अध्यक्ष ओलीसँग शिष्टाचार भेट",
      thumbnail:
        "https://i0.wp.com/www.peoplesreview.com.np/wp-content/uploads/2020/03/oli-nepal-prachanda-madhav-kumar-nepal-kp-oli-puspakamaldahal.jpg?resize=961%2C614&ssl=1",
      imgList: [
        "https://i0.wp.com/www.peoplesreview.com.np/wp-content/uploads/2020/03/oli-nepal-prachanda-madhav-kumar-nepal-kp-oli-puspakamaldahal.jpg?resize=961%2C614&ssl=1",
        "https://www.space4ktv.com/storage/photos/28/kp-oli1679045615.webp",
        "https://en.setopati.com/uploads/posts/725X460/Oli-1710241632.jpg",
      ],
      desc: "काठमाडौं । नेकपा (एमाले)का अध्यक्ष केपी शर्मा ओलीसँग नेपालका लागि संयुक्त राज्य अमेरिकाका राजदूत डिन आर. थम्पसनले शिष्टाचार भेट गर्नुभएको छ । अध्यक्ष ओलीको निवास बालकोटमा आज भएको भेटमा राजदूत थम्पसनले समसामयिक राजनीतिक विषयमा चासो राख्नुभएको थियो भने अध्यक्ष ओलीले ती विषयमा आफ्ना धारणा जानकारी गराउनुभएको थियो । भेटमा नेकपा (एमाले) स्थायी कमिटी सदस्य तथा परराष्ट्र मामिला विभाग प्रमुख डा.राजन भट्टराई पनि सहभागी हुनुहुन्थ्यो ।",
    },
    {
      id: 6,
      title: "सुन तस्करी प्रकरणः जाँचबुझ आयोग गठन गर्ने सहमति ",
      thumbnail:
        "https://en.setopati.com/uploads/posts/725X460/Oli-1710241632.jpg",
      imgList: [
        "https://i0.wp.com/www.peoplesreview.com.np/wp-content/uploads/2020/03/oli-nepal-prachanda-madhav-kumar-nepal-kp-oli-puspakamaldahal.jpg?resize=961%2C614&ssl=1",
        "https://www.space4ktv.com/storage/photos/28/kp-oli1679045615.webp",
        "https://en.setopati.com/uploads/posts/725X460/Oli-1710241632.jpg",
      ],
      desc: "काठमाडौं । सुन तस्करी प्रकरणको स्वतन्त्र तथा निष्पक्ष छानविन, हुँदै र  भइरहेका छानविनको अध्ययन गर्न र तस्करीजन्य गतिविधि नियन्त्रणका लागि आवश्यक सुझाव दिन जाँचबुझ आयोग गठन हुने भएको छ । त्रिभुवन अन्तर्राष्ट्रिय विमानस्थलबाट गत साउन २ गते ब्रेक सुका नाममा क्वीन्टलभन्दा बढी सुन भित्रिएर सिनामङ्गलमा बरामद गरिएपछि नेकपा (एमाले) ले सुन तस्करीको स्वतन्त्र र निष्पक्ष छानविनका लागि उच्चस्तरीय आयोग/समिति गठन गर्नुुपर्ने माग गर्दै आएको थियो । प्रधानमन्त्री तथा मन्त्रिपरिषद्को कार्यालय सिंहदरबारमा बुधबार बसेको प्रतिनिधि सभामा प्रतिनिधित्व गर्ने राष्ट्रिय  मान्यता  प्राप्त  दलहरूको बैठकमा सुन लगायत तस्करीजन्य  कार्य  पूर्णरूपमा  नियन्त्रणका  लागि  सुझावसहितको  प्रतिवेदन पेस गर्नेगरी जाँझबुझ आयोग गठन गर्ने सहमति भएको हो । प्रधानमन्त्री पुष्पकमल दाहाल ‘प्रचण्ड’, नेकपा (एमाले) का अध्यक्ष केपी शर्मा ओली, नेपाली कांग्रेसका सभापति शेरबहादुर देउवा लगायत सात दलका प्रमुख र प्रमुख सचेतक सम्मिलित बैठकमा आगामी असोज ५ गते आयोग गठन गर्ने र सोही दिनबाट आयोगले काम सुरु गर्ने सहमति भएको छ । नेकपा (एमाले)ले सर्वसाधारण नागरिकका जुत्ता, घडि, पेटी, पर्स र मोवाइल समेत खोलेर सुरक्षा जाँचपास गरिने विमानस्थल भन्सारबाट क्वीण्टलभन्दा बढी परिमाणको सुन ‘ब्रेक सु’का नाममा भित्रिनुमा सरकारी संयन्त्रको मिलोमतो विना सम्भव नभएको भन्दै उच्चस्तरीय छानविन आयोग गठनको माग गर्दै आएको थियो । त्यस अघि पनि पटक पटक ‘ब्रेक सु’ आयात भएको देखिएको र साढे नौ किलो इलेक्ट्रिक चुरोट(भेप्स)भित्र लुकाएर ल्याएको सुन विमानस्थल भन्सारको गोदामबाट हराएको विषय छानविनका लागि नेकपा (एमाले)ले संसदमा आवाज उठाउँदै आएको थियो । सुन तस्करीमा सत्ता गठबन्धन दलका नेताहरूको नामसमेत जोडिएर आएको र सरकारले आयोग गठन गर्न सहमत नभएका कारण संसद बैठक अबरुद्ध हुँदै आएको थियो । जाँचबुझ आयोग गठनको सहमतिपछि संसद सुचारु भएको छ । दलहरूबीच भएको सहमति यस प्रकार छः ",
    },
  ],
};
