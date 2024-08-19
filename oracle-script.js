document.getElementById('shake-btn').addEventListener('click', function() {
    // 周易64卦数据，包括爻词和卦象图像链接
    const gua = [
        { name: '乾', description: '乾卦: 元，亨，利，贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/qian.png', yao: [
            '初九：潜龙勿用。',
            '九二：见龙在田，利见大人。',
            '九三：君子终日乾乾，夕惕若，厉无咎。',
            '九四：或跃在渊，无咎。',
            '九五：飞龙在天，利见大人。',
            '上九：亢龙有悔。'
        ]},
        { name: '坤', description: '坤卦: 元，亨，利，牝马之贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/kun.png', yao: [
            '初六：履霜，坚冰至。',
            '六二：直，方，大，不习，无不利。',
            '六三：含章可贞。或从王事，无成有终。',
            '六四：括囊，无咎无誉。',
            '六五：黄裳，元吉。',
            '上六：龙战于野，其血玄黄。'
        ]},
        { name: '屯', description: '屯卦: 元，亨，利，贞。勿用有攸往，利建侯。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/tun.png', yao: [
            '初九：磐桓，利居贞，利建侯。',
            '六二：屯如邅如，乘马班如，匪寇，婚媾，女子贞不字，十年乃字。',
            '六三：即鹿无虞，惟入于林中，君子几不如舍，往吝。',
            '六四：乘马班如，求婚媾，往吉，无不利。',
            '九五：屯其膏，小贞吉，大贞凶。',
            '上六：乘马班如，泣血涟如。'
        ]},
        { name: '蒙', description: '蒙卦: 亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/meng.png', yao: [
            '初六：发蒙，利用刑人，用说桎梏，以往吝。',
            '九二：包蒙吉，纳妇吉，子克家。',
            '六三：勿用取女，见金夫，不有躬，无攸利。',
            '六四：困蒙，吝。',
            '六五：童蒙，吉。',
            '上九：击蒙，不利为寇，利御寇。'
        ]},
        { name: '需', description: '需卦: 有孚，光亨，贞吉。利涉大川。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/xu.png', yao: [
            '初九：需于郊，利用恒，无咎。',
            '九二：需于沙，小有言，终吉。',
            '九三：需于泥，致寇至。',
            '六四：需于血，出自穴。',
            '九五：需于酒食，贞吉。',
            '上六：入于穴，有不速之客三人来，敬之终吉。'
        ]},
        { name: '讼', description: '讼卦: 有孚窒惕，中吉，终凶。利见大人，不利涉大川。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/song.png', yao: [
            '初六：不永所事，小有言，终吉。',
            '九二：不克讼，归而逋，其邑人三百户，无眚。',
            '六三：食旧德，贞厉，终吉，或从王事，无成。',
            '九四：不克讼，复既命渝，安贞吉。',
            '九五：讼元吉。',
            '上九：或锡之鞶带，终朝三褫之。'
        ]},
        { name: '师', description: '师卦: 贞，丈人吉，无咎。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/shi.png', yao: [
            '初六：师出以律，否臧凶。',
            '九二：在师中，吉无咎，王三锡命。',
            '六三：师或舆尸，凶。',
            '六四：师左次，无咎。',
            '六五：田有禽，利执言，无咎，长子帅师，以中行，弟子舆尸，凶。',
            '上六：大君有命，开国承家，小人勿用。'
        ]},
        { name: '比', description: '比卦: 吉。原筮，元永贞，无咎。不宁方来，后夫凶。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/bi.png', yao: [
            '初六：有孚比之，无咎。有孚盈缶，终来有它，吉。',
            '六二：比之自内，贞吉。',
            '六三：比之匪人。',
            '六四：外比之，贞吉。',
            '九五：显比，王用三驱，失前禽，邑人不诫，吉。',
            '上六：比之无首，凶。'
        ]},
        { name: '小畜', description: '小畜卦: 亨。密云不雨，自我西郊。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/xiaoxu.png', yao: [
            '初九：复自道，何其咎？吉。',
            '九二：牵复，吉。',
            '九三：舆说辐，夫妻反目。',
            '六四：有孚，血去惕出，无咎。',
            '九五：有孚挛如，富以其邻。',
            '上九：既雨既处，尚德载，妇贞厉，月几望，君子征凶。'
        ]},
        { name: '履', description: '履卦: 履虎尾，不咥人，亨。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/lu.png', yao: [
            '初九：素履往，无咎。',
            '九二：履道坦坦，幽人贞吉。',
            '六三：眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。',
            '九四：履虎尾，愬愬，终吉。',
            '九五：夬履，贞厉。',
            '上九：视履考祥，其旋元吉。'
        ]},
        { name: '泰', description: '泰卦: 小往大来，吉，亨。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/tai.png', yao: [
            '初九：拔茅茹，以其汇，征吉。',
            '九二：包荒，用冯河，不遐遗，朋亡，得尚于中行。',
            '九三：无平不陂，无往不复，艰贞无咎，勿恤其孚，于食有福。',
            '六四：翩翩不富，以其邻，不戒以孚。',
            '六五：帝乙归妹，以祉元吉。',
            '上六：城复于隍，勿用师，自邑告命，贞吝。'
        ]},
        { name: '否', description: '否卦: 否之匪人，不利君子贞，大往小来。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/pi.png', yao: [
            '初六：拔茅茹，以其汇，贞吉，亨。',
            '六二：包承，小人吉，大人否亨。',
            '六三：包羞。',
            '九四：有命无咎，畴离祉。',
            '九五：休否，大人吉，其亡其亡，系于苞桑。',
            '上九：倾否，先否后喜。'
        ]},
        { name: '同人', description: '同人卦: 同人于野，亨。利涉大川，利君子贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/tongren.png', yao: [
            '初九：同人于门，无咎。',
            '六二：同人于宗，吝。',
            '九三：伏戎于莽，升其高陵，三岁不兴。',
            '九四：乘其墉，弗克攻，吉。',
            '九五：同人，先号啕而后笑，大师克，相遇。',
            '上九：同人于郊，无悔。'
        ]},
        { name: '大有', description: '大有卦: 元亨。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/dayou.png', yao: [
            '初九：无交害，匪咎，艰则无咎。',
            '九二：大车以载，有攸往，无咎。',
            '九三：公用亨于天子，小人弗克。',
            '九四：匪其彭，无咎。',
            '六五：厥孚交如威如，吉。',
            '上九：自天佑之，吉无不利。'
        ]},
        { name: '谦', description: '谦卦: 亨，君子有终。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/qian.png', yao: [
            '初六：谦谦君子，用涉大川，吉。',
            '六二：鸣谦，贞吉。',
            '九三：劳谦君子，有终，吉。',
            '六四：无不利，捴谦。',
            '六五：不富以其邻，利用侵伐，无不利。',
            '上六：鸣谦，利用行师征邑国。'
        ]},
        { name: '豫', description: '豫卦: 利建侯行师。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/yu.png', yao: [
            '初六：鸣豫，凶。',
            '六二：介于石，不终日，贞吉。',
            '六三：盱豫，悔。迟有悔。',
            '九四：由豫，大有得，勿疑，朋盍簪。',
            '六五：贞疾，恒不死。',
            '上六：冥豫，成有渝，无咎。'
        ]},
        { name: '随', description: '随卦: 元亨，利贞，无咎。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/sui.png', yao: [
            '初九：官有渝，贞吉，出门交有功。',
            '六二：系小子，失丈夫。',
            '六三：系丈夫，失小子，随有求得，利居贞。',
            '九四：随有获，贞凶，有孚在道，以明，何咎。',
            '九五：孚于嘉，吉。',
            '上六：拘系之，乃从维之，王用亨于西山。'
        ]},
        { name: '蛊', description: '蛊卦: 元亨，利涉大川。先甲三日，后甲三日。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/gu.png', yao: [
            '初六：干父之蛊，有子，考无咎，厉终吉。',
            '九二：干母之蛊，不可贞。',
            '九三：干父之蛊，小有悔，无大咎。',
            '六四：裕父之蛊，往见吝。',
            '六五：干父之蛊，用誉。',
            '上九：不事王侯，高尚其事。'
        ]},
        { name: '临', description: '临卦: 元亨，利贞。至于八月有凶。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/lin.png', yao: [
            '初九：咸临，贞吉。',
            '九二：咸临，吉无不利。',
            '六三：甘临，无攸利，既忧之，无咎。',
            '六四：至临，无咎。',
            '六五：知临，大君之宜，吉。',
            '上六：敦临，吉无咎。'
        ]},
        { name: '观', description: '观卦: 盥而不荐，有孚顒若。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/guan.png', yao: [
            '初六：童观，小人无咎，君子吝。',
            '六二：窥观，利女贞。',
            '六三：观我生，进退。',
            '六四：观国之光，利用宾于王。',
            '九五：观我生，君子无咎。',
            '上九：观其生，君子无咎。'
        ]},
        { name: '噬嗑', description: '噬嗑卦: 亨。利用狱。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/shike.png', yao: [
            '初九：屦校灭趾，无咎。',
            '六二：噬肤灭鼻，无咎。',
            '六三：噬腊肉，遇毒，小吝，无咎。',
            '九四：噬乾胏，得金矢，利艰贞，吉。',
            '六五：噬乾肉，得黄金，贞厉，无咎。',
            '上九：何校灭耳，凶。'
        ]},
        { name: '贲', description: '贲卦: 亨。小利有攸往。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/bi.png', yao: [
            '初九：贲其趾，舍车而徒。',
            '六二：贲其须。',
            '九三：贲如濡如，永贞吉。',
            '六四：贲如皤如，白马翰如，匪寇婚媾。',
            '六五：贲于丘园，束帛戋戋，吝，终吉。',
            '上九：白贲，无咎。'
        ]},
        { name: '剥', description: '剥卦: 不利有攸往。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/bo.png', yao: [
            '初六：剥床以足，蔑贞凶。',
            '六二：剥床以辨，蔑贞凶。',
            '六三：剥之，无咎。',
            '六四：剥床以肤，凶。',
            '六五：贯鱼，以宫人宠，无不利。',
            '上九：硕果不食，君子得舆，小人剥庐。'
        ]},
        { name: '复', description: '复卦: 亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/fu.png', yao: [
            '初九：不远复，无祗悔，元吉。',
            '六二：休复，吉。',
            '六三：频复，厉无咎。',
            '六四：中行独复。',
            '六五：敦复，无悔。',
            '上六：迷复，凶，有灾眚，用行师，终有大败，以其国君凶，至于十年不克征。'
        ]},
        { name: '无妄', description: '无妄卦: 元亨，利贞。其匪正有眚，不利有攸往。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/wuwang.png', yao: [
            '初九：无妄，往吉。',
            '六二：不耕获，不菑畬，则利有攸往。',
            '六三：无妄之灾，或系之牛，行人之得，邑人之灾。',
            '九四：可贞，无咎。',
            '九五：无妄之疾，勿药有喜。',
            '上九：无妄，行有眚，无攸利。'
        ]},
        { name: '大畜', description: '大畜卦: 利贞。不家食，吉。利涉大川。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/daxu.png', yao: [
            '初九：有厉，利已。',
            '九二：舆说輹。',
            '九三：良马逐，利艰贞。曰闲舆卫，利有攸往。',
            '六四：童牛之牿，元吉。',
            '六五：豮豕之牙，吉。',
            '上九：何天之衢，亨。'
        ]},
        { name: '颐', description: '颐卦: 贞吉。观颐，自求口实。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/yi.png', yao: [
            '初九：舍尔灵龟，观我朵颐，凶。',
            '六二：颠颐，拂经于丘，颐征凶。',
            '六三：拂颐，贞凶，十年勿用，无攸利。',
            '六四：颠颐，吉。虎视眈眈，其欲逐逐，无咎。',
            '六五：拂经，居贞吉，不可涉大川。',
            '上九：由颐，厉吉，利涉大川。'
        ]},
        { name: '大过', description: '大过卦: 栋桡，利有攸往，亨。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/daguo.png', yao: [
            '初六：藉用白茅，无咎。',
            '九二：枯杨生稊，老夫得其女妻，无不利。',
            '九三：栋桡，凶。',
            '九四：栋隆，吉。有它吝。',
            '九五：枯杨生华，老妇得其士夫，无咎无誉。',
            '上六：过涉灭顶，凶，无咎。'
        ]},
        { name: '坎', description: '坎卦: 有孚，维心亨，行有尚。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/kan.png', yao: [
            '初六：习坎，入于坎窞，凶。',
            '九二：坎有险，求小得。',
            '六三：来之坎坎，险且枕，入于坎窞，勿用。',
            '六四：樽酒簋贰，用缶，纳约自牖，终无咎。',
            '九五：坎不盈，祗既平，无咎。',
            '上六：系用徽纆，置于丛棘，三岁不得，凶。'
        ]},
        { name: '离', description: '离卦: 利贞，亨。畜牝牛，吉。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/li.png', yao: [
            '初九：履错然，敬之无咎。',
            '六二：黄离，元吉。',
            '九三：日昃之离，不鼓缶而歌，则大耋之嗟，凶。',
            '九四：突如其来如，焚如，死如，弃如。',
            '六五：出涕沱若，戚嗟若，吉。',
            '上九：王用出征，有嘉折首，获匪其丑，无咎。'
        ]},
        { name: '咸', description: '咸卦: 亨，利贞，取女吉。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/xian.png', yao: [
            '初六：咸其拇。',
            '六二：咸其腓，凶，居吉。',
            '九三：咸其股，执其随，往吝。',
            '九四：贞吉悔亡，憧憧往来，朋从尔思。',
            '九五：咸其脢，无悔。',
            '上六：咸其辅颊舌。'
        ]},
        { name: '恒', description: '恒卦: 亨，无咎，利贞，利有攸往。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/heng.png', yao: [
            '初六：浚恒，贞凶，无攸利。',
            '九二：悔亡。',
            '九三：不恒其德，或承之羞，贞吝。',
            '九四：田无禽。',
            '六五：恒其德，贞，妇人吉，夫子凶。',
            '上六：振恒，凶。'
        ]},
        { name: '遁', description: '遁卦: 亨。小利贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/dun.png', yao: [
            '初六：遁尾，厉，勿用有攸往。',
            '六二：执之用黄牛之革，莫之胜说。',
            '九三：系遁，有疾厉，畜臣妾吉。',
            '九四：好遁，君子吉，小人否。',
            '九五：嘉遁，贞吉。',
            '上九：肥遁，无不利。'
        ]},
        { name: '大壮', description: '大壮卦: 利贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/dazhuang.png', yao: [
            '初九：壮于趾，征凶，有孚。',
            '九二：贞吉。',
            '九三：小人用壮，君子用罔，贞厉，羝羊触藩，羸其角。',
            '九四：贞吉悔亡，藩决不羸，壮于大舆之輹。',
            '六五：丧羊于易，无悔。',
            '上六：羝羊触藩，不能退，不能遂，无攸利，艰则吉。'
        ]},
        { name: '晋', description: '晋卦: 康侯用锡马蕃庶，昼日三接。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/jin.png', yao: [
            '初六：晋如摧如，贞吉，罔孚，裕无咎。',
            '六二：晋如愁如，贞吉。受兹介福，于其王母。',
            '六三：众允，悔亡。',
            '九四：晋如鼫鼠，贞厉。',
            '六五：悔亡，失得勿恤，往吉，无不利。',
            '上九：晋其角，维用伐邑，厉吉无咎，贞吝。'
        ]},
        { name: '明夷', description: '明夷卦: 利艰贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/mingyi.png', yao: [
            '初九：明夷于飞，垂其翼，君子于行，三日不食，有攸往，主人有言。',
            '六二：明夷，夷于左股，用拯马壮，吉。',
            '九三：明夷于南狩，得其大首，不可疾贞。',
            '六四：入于左腹，获明夷之心，于出门庭。',
            '六五：箕子之明夷，利贞。',
            '上六：不明晦，初登于天，后入于地。'
        ]},
        { name: '家人', description: '家人卦: 利女贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/jiaren.png', yao: [
            '初九：闲有家，悔亡。',
            '六二：无攸遂，在中馈，贞吉。',
            '九三：家人嗃嗃，悔厉吉；妇子嘻嘻，终吝。',
            '六四：富家，大吉。',
            '九五：王假有家，勿恤吉。',
            '上九：有孚威如，终吉。'
        ]},
        { name: '睽', description: '睽卦: 小事吉。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/kui.png', yao: [
            '初九：悔亡，丧马勿逐，自复；见恶人，无咎。',
            '九二：遇主于巷，无咎。',
            '六三：见舆曳，其牛掣，其人天且劓，无初有终。',
            '九四：睽孤，遇元夫，交孚，厉，无咎。',
            '六五：悔亡，厥宗噬肤，往何咎。',
            '上九：睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉。'
        ]},
        { name: '蹇', description: '蹇卦: 利西南，不利东北。利见大人，贞吉。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/jian.png', yao: [
            '初六：往蹇，来誉。',
            '六二：王臣蹇蹇，匪躬之故。',
            '九三：往蹇来反。',
            '六四：往蹇来连。',
            '九五：大蹇朋来。',
            '上六：往蹇来硕，吉，利见大人。'
        ]},
        { name: '解', description: '解卦: 利西南，无所往，其来复吉。有攸往，夙吉。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/xie.png', yao: [
            '初六：无咎。',
            '九二：田获三狐，得黄矢，贞吉。',
            '六三：负且乘，致寇至，贞吝。',
            '九四：解而拇，朋至斯孚。',
            '六五：君子维有解，吉；有孚于小人。',
            '上六：公用射隼于高墉之上，获之无不利。'
        ]},
        { name: '损', description: '损卦: 有孚，元吉，无咎，可贞，利有攸往。曷之用，二簋可用享。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/sun.png', yao: [
            '初九：已事遄往，无咎，酌损之。',
            '九二：利贞，征凶，弗损，益之。',
            '六三：三人行则损一人，一人行则得其友。',
            '六四：损其疾，使遄有喜，无咎。',
            '六五：或益之十朋之龟，弗克违，元吉。',
            '上九：弗损，益之，无咎，贞吉，利有攸往，得臣无家。'
        ]},
        { name: '益', description: '益卦: 利有攸往，利涉大川。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/yi.png', yao: [
            '初九：利用为大作，元吉，无咎。',
            '六二：或益之十朋之龟，弗克违，永贞吉，王用享于帝，吉。',
            '六三：益之用凶事，无咎。有孚中行，告公用圭。',
            '六四：中行告公，从，利用为依迁国。',
            '九五：有孚惠心，勿问元吉，有孚惠我德。',
            '上九：莫益之，或击之，立心勿恒，凶。'
        ]},
        { name: '夬', description: '夬卦: 扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/gui.png', yao: [
            '初九：壮于前趾，往不胜为吝。',
            '九二：惕号，莫夜有戎，勿恤。',
            '九三：壮于頄，有凶，君子夬夬，独行遇雨，若濡，有愠，无咎。',
            '九四：臀无肤，其行次且，牵羊悔亡，闻言不信。',
            '九五：苋陆夬夬，中行无咎。',
            '上六：无号，终有凶。'
        ]},
        { name: '姤', description: '姤卦: 女壮，勿用取女。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/gou.png', yao: [
            '初六：系于金柅，贞吉，有攸往，见凶，赢豕孚蹢躅。',
            '九二：包有鱼，无咎，不利宾。',
            '九三：臀无肤，其行次且，厉，无大咎。',
            '九四：包无鱼，起凶。',
            '九五：以杞包瓜，含章，有陨自天。',
            '上九：姤其角，吝，无咎。'
        ]},
        { name: '萃', description: '萃卦: 亨，王假有庙，利见大人，亨，利贞，用大牲吉，利有攸往。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/cui.png', yao: [
            '初六：有孚不终，乃乱乃萃，若号，一握为笑，勿恤，往无咎。',
            '六二：引吉，无咎，孚乃利用禴。',
            '六三：萃如，嗟如，无攸利，往无咎，小吝。',
            '九四：大吉无咎。',
            '九五：萃有位，无咎，匪孚，元永贞，悔亡。',
            '上六：齐咨涕洟，无咎。'
        ]},
        { name: '升', description: '升卦: 元亨，用见大人，勿恤，南征吉。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/sheng.png', yao: [
            '初六：允升，大吉。',
            '九二：孚乃利用禴，无咎。',
            '九三：升虚邑。',
            '六四：王用亨于岐山，吉，无咎。',
            '六五：贞吉，升阶。',
            '上六：冥升，利于不息之贞。'
        ]},
        { name: '困', description: '困卦: 亨。贞大人吉，无咎。有言不信。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/kun.png', yao: [
            '初六：臀困于株木，入于幽谷，三岁不觌。',
            '九二：困于酒食，朱绂方来，利用享祀，征凶，无咎。',
            '六三：困于石，据于蒺藜，入于其宫，不见其妻，凶。',
            '九四：来徐徐，困于金车，吝，有终。',
            '九五：劓刖，困于赤绂，乃徐有说，利用祭祀。',
            '上六：困于葛藟，于臲卼，曰动悔，有悔，征吉。'
        ]},
        { name: '井', description: '井卦: 改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/jing.png', yao: [
            '初六：井泥不食，旧井无禽。',
            '九二：井谷射鲋，瓮敝漏。',
            '九三：井渫不食，为我心恻，可用汲，王明并受其福。',
            '六四：井甃，无咎。',
            '九五：井洌，寒泉食。',
            '上六：井收勿幕，有孚元吉。'
        ]},
        { name: '革', description: '革卦: 巳日乃孚，元亨，利贞，悔亡。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/ge.png', yao: [
            '初九：巩用黄牛之革。',
            '六二：己日乃革之，征吉，无咎。',
            '九三：征凶，贞厉，革言三就，有孚。',
            '九四：悔亡，有孚改命，吉。',
            '九五：大人虎变，未占有孚。',
            '上六：君子豹变，小人革面，征凶，居贞吉。'
        ]},
        { name: '鼎', description: '鼎卦: 元吉，亨。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/ding.png', yao: [
            '初六：鼎颠趾，利出否，得妾以其子，无咎。',
            '九二：鼎有实，我仇有疾，不我能即，吉。',
            '九三：鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉。',
            '九四：鼎折足，覆公餗，其形渥，凶。',
            '六五：鼎黄耳金铉，利贞。',
            '上九：鼎玉铉，大吉，无不利。'
        ]},
        { name: '震', description: '震卦: 亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/zhen.png', yao: [
            '初九：震来虩虩，后笑言哑哑，吉。',
            '六二：震来厉，亿丧贝，跻于九陵，勿逐，七日得。',
            '六三：震苏苏，震行无眚。',
            '九四：震遂泥。',
            '六五：震往来厉，亿无丧，有事。',
            '上六：震索索，视矍矍，征凶，震不于其躬，于其邻无咎，婚媾有言。'
        ]},
        { name: '艮', description: '艮卦: 艮其背，不获其身，行其庭，不见其人，无咎。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/gen.png', yao: [
            '初六：艮其趾，无咎，利永贞。',
            '六二：艮其腓，不拯其随，其心不快。',
            '九三：艮其限，列其夤，厉熏心。',
            '六四：艮其身，无咎。',
            '六五：艮其辅，言有序，悔亡。',
            '上九：敦艮，吉。'
        ]},
        { name: '渐', description: '渐卦: 女归吉，利贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/jian.png', yao: [
            '初六：鸿渐于干，未夷，征凶。',
            '六二：鸿渐于磐，饮食衎衎，吉。',
            '九三：鸿渐于陆，夫征不复，妇孕不育，凶；利御寇。',
            '六四：鸿渐于木，或得其桷，无咎。',
            '九五：鸿渐于陵，妇三岁不孕，终莫之胜，吉。',
            '上九：鸿渐于陆，其羽可用为仪，吉。'
        ]},
        { name: '归妹', description: '归妹卦: 征凶，无攸利。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/guimei.png', yao: [
            '初九：归妹以娣，跛能履，征吉。',
            '九二：眇能视，利幽人之贞。',
            '六三：归妹以须，反归以娣。',
            '九四：归妹愆期，迟归有时。',
            '六五：帝乙归妹，其君之袂不如其娣之袂良，月几望，吉。',
            '上六：女承筐，无实，士刲羊，无血，无攸利。'
        ]},
        { name: '丰', description: '丰卦: 亨，王假之，勿忧，宜日中。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/feng.png', yao: [
            '初九：遇其配主，虽旬无咎，往有尚。',
            '六二：丰其蔀，日中见斗，往得疑疾，有孚发若，吉。',
            '九三：丰其沛，日中见昧，折其右肱，无咎。',
            '九四：丰其蔀，日中见斗，遇其夷主，吉。',
            '六五：来章，有庆誉，吉。',
            '上六：丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。'
        ]},
        { name: '旅', description: '旅卦: 小亨，旅贞吉。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/lv.png', yao: [
            '初六：旅琐琐，斯其所取灾。',
            '六二：旅即次，怀其资，得童仆，贞。',
            '九三：旅焚其次，丧其童仆，贞厉。',
            '九四：旅于处，得其资斧，我心不快。',
            '六五：射雉，一矢亡，终以誉命。',
            '上九：鸟焚其巢，旅人先笑后号啕，丧牛于易，凶。'
        ]},
        { name: '巽', description: '巽卦: 小亨，利有攸往，利见大人。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/xun.png', yao: [
            '初六：进退，利武人之贞。',
            '九二：巽在床下，用史巫纷若，吉，无咎。',
            '九三：频巽，吝。',
            '六四：悔亡，田获三品。',
            '九五：贞吉，悔亡，无不利。无初有终，先庚三日，后庚三日，吉。',
            '上九：巽在床下，丧其资斧，贞凶。'
        ]},
        { name: '兑', description: '兑卦: 亨，利贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/dui.png', yao: [
            '初九：和兑，吉。',
            '九二：孚兑，吉，悔亡。',
            '六三：来兑，凶。',
            '九四：商兑未宁，介疾有喜。',
            '九五：孚于剥，有厉。',
            '上六：引兑。'
        ]},
        { name: '涣', description: '涣卦: 亨。王假有庙，利涉大川，利贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/huan.png', yao: [
            '初六：用拯马壮，吉。',
            '九二：涣奔其机，悔亡。',
            '六三：涣其躬，无悔。',
            '六四：涣其群，元吉，涣有丘，匪夷所思。',
            '九五：涣汗其大号，涣王居，无咎。',
            '上九：涣其血，去逖出，无咎。'
        ]},
        { name: '节', description: '节卦: 亨，苦节不可贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/jie.png', yao: [
            '初九：不出户庭，无咎。',
            '九二：不出门庭，凶。',
            '六三：不节若，则嗟若，无咎。',
            '六四：安节，亨。',
            '九五：甘节，吉；往有尚。',
            '上六：苦节，贞凶，悔亡。'
        ]},
        { name: '中孚', description: '中孚卦: 豚鱼吉，利涉大川，利贞。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/zhongfu.png', yao: [
            '初九：虞吉，有它不燕。',
            '九二：鸣鹤在阴，其子和之；我有好爵，吾与尔靡之。',
            '六三：得敌，或鼓或罢，或泣或歌。',
            '六四：月几望，马匹亡，无咎。',
            '九五：有孚挛如，富以其邻。',
            '上九：翰音登于天，贞凶。'
        ]},
        { name: '小过', description: '小过卦: 亨。利贞，可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/xiaoguo.png', yao: [
            '初六：飞鸟以凶。',
            '六二：过其祖，遇其妣；不及其君，遇其臣，无咎。',
            '九三：弗过防之，从或戕之，凶。',
            '九四：无咎，弗过遇之，往厉必戒，勿用永贞。',
            '六五：密云不雨，自我西郊，公弋取彼在穴。',
            '上六：弗遇过之，飞鸟离之，凶，是谓灾眚。'
        ]},
        { name: '既济', description: '既济卦: 亨，小利贞。初吉终乱。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/jiji.png', yao: [
            '初九：曳其轮，濡其尾，无咎。',
            '六二：妇丧其茀，勿逐，七日得。',
            '九三：高宗伐鬼方，三年克之，小人勿用。',
            '六四：繻有衣袽，终日戒。',
            '九五：东邻杀牛，不如西邻之禴祭，实受其福。',
            '上六：濡其首，厉。'
        ]},
        { name: '未济', description: '未济卦: 亨。小狐汔济，濡其尾，无攸利。', image: 'https://raw.githubusercontent.com/tinygan/The-64-Diagrams/master/pngs/weiji.png', yao: [
            '初六：濡其尾，吝。',
            '九二：曳其轮，贞吉。',
            '六三：未济，征凶，利涉大川。',
            '九四：贞吉，悔亡，震用伐鬼方，三年有赏于大国。',
            '六五：贞吉，无悔，君子之光，有孚吉。',
            '上九：有孚于饮酒，无咎。濡其首，有孚失是。'
        ]}
    ];

    // 随机选择一卦
    const randomIndex = Math.floor(Math.random() * gua.length);
    const selectedGua = gua[randomIndex];

    // 显示卦象、卦辞、和卦象图
    document.getElementById('gua-name').innerText = selectedGua.name;
    document.getElementById('gua-description').innerText = selectedGua.description;

    // 显示卦象图
    const guaImage = document.getElementById('gua-image');
    guaImage.src = selectedGua.image;
    guaImage.alt = selectedGua.name;

    // 显示爻词
    const yaoList = document.getElementById('yao-list');
    yaoList.innerHTML = ''; // 清空之前的爻词
    selectedGua.yao.forEach(function(yao) {
        const li = document.createElement('li');
        li.innerText = yao;
        yaoList.appendChild(li);
    });

    // 切换到结果页面
    document.getElementById('draw-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
});

function goBack() {
    window.location.href = "index.html"; // 返回主页面
}
