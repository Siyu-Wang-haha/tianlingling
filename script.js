document.getElementById('shake-btn').addEventListener('click', function() {
    // 周易64卦数据
    const gua = [
        { name: '乾', description: '乾卦: 元，亨，利，贞。' },
        { name: '坤', description: '坤卦: 元，亨，利，牝马之贞。' },
        { name: '屯', description: '屯卦: 元，亨，利，贞。勿用有攸往，利建侯。' },
        { name: '蒙', description: '蒙卦: 亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。' },
        { name: '需', description: '需卦: 有孚，光亨，贞吉。利涉大川。' },
        { name: '讼', description: '讼卦: 有孚窒惕，中吉，终凶。利见大人，不利涉大川。' },
        { name: '师', description: '师卦: 贞，丈人吉，无咎。' },
        { name: '比', description: '比卦: 吉。原筮，元永贞，无咎。不宁方来，后夫凶。' },
        { name: '小畜', description: '小畜卦: 亨。密云不雨，自我西郊。' },
        { name: '履', description: '履卦: 履虎尾，不咥人，亨。' },
        { name: '泰', description: '泰卦: 小往大来，吉，亨。' },
        { name: '否', description: '否卦: 否之匪人，不利君子贞，大往小来。' },
        { name: '同人', description: '同人卦: 同人于野，亨。利涉大川，利君子贞。' },
        { name: '大有', description: '大有卦: 元亨。' },
        { name: '谦', description: '谦卦: 亨，君子有终。' },
        { name: '豫', description: '豫卦: 利建侯行师。' },
        { name: '随', description: '随卦: 元亨，利贞，无咎。' },
        { name: '蛊', description: '蛊卦: 元亨，利涉大川。先甲三日，后甲三日。' },
        { name: '临', description: '临卦: 元亨，利贞。至于八月有凶。' },
        { name: '观', description: '观卦: 盥而不荐，有孚顒若。' },
        { name: '噬嗑', description: '噬嗑卦: 亨。利用狱。' },
        { name: '贲', description: '贲卦: 亨。小利有攸往。' },
        { name: '剥', description: '剥卦: 不利有攸往。' },
        { name: '复', description: '复卦: 亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。' },
        { name: '无妄', description: '无妄卦: 元亨，利贞。其匪正有眚，不利有攸往。' },
        { name: '大畜', description: '大畜卦: 利贞。不家食，吉。利涉大川。' },
        { name: '颐', description: '颐卦: 贞吉。观颐，自求口实。' },
        { name: '大过', description: '大过卦: 栋桡，利有攸往，亨。' },
        { name: '坎', description: '坎卦: 有孚，维心亨，行有尚。' },
        { name: '离', description: '离卦: 利贞，亨。畜牝牛，吉。' },
        { name: '咸', description: '咸卦: 亨，利贞，取女吉。' },
        { name: '恒', description: '恒卦: 亨，无咎，利贞，利有攸往。' },
        { name: '遁', description: '遁卦: 亨。小利贞。' },
        { name: '大壮', description: '大壮卦: 利贞。' },
        { name: '晋', description: '晋卦: 康侯用锡马蕃庶，昼日三接。' },
        { name: '明夷', description: '明夷卦: 利艰贞。' },
        { name: '家人', description: '家人卦: 利女贞。' },
        { name: '睽', description: '睽卦: 小事吉。' },
        { name: '蹇', description: '蹇卦: 利西南，不利东北。利见大人，贞吉。' },
        { name: '解', description: '解卦: 利西南，无所往，其来复吉。有攸往，夙吉。' },
        { name: '损', description: '损卦: 有孚，元吉，无咎，可贞，利有攸往。曷之用，二簋可用享。' },
        { name: '益', description: '益卦: 利有攸往，利涉大川。' },
        { name: '夬', description: '夬卦: 扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。' },
        { name: '姤', description: '姤卦: 女壮，勿用取女。' },
        { name: '萃', description: '萃卦: 亨，王假有庙，利见大人，亨，利贞，用大牲吉，利有攸往。' },
        { name: '升', description: '升卦: 元亨，用见大人，勿恤，南征吉。' },
        { name: '困', description: '困卦: 亨。贞大人吉，无咎。有言不信。' },
        { name: '井', description: '井卦: 改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶。' },
        { name: '革', description: '革卦: 巳日乃孚，元亨，利贞，悔亡。' },
        { name: '鼎', description: '鼎卦: 元吉，亨。' },
        { name: '震', description: '震卦: 亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。' },
        { name: '艮', description: '艮卦: 艮其背，不获其身，行其庭，不见其人，无咎。' },
        { name: '渐', description: '渐卦: 女归吉，利贞。' },
        { name: '归妹', description: '归妹卦: 征凶，无攸利。' },
        { name: '丰', description: '丰卦: 亨，王假之，勿忧，宜日中。' },
        { name: '旅', description: '旅卦: 小亨，旅贞吉。' },
        { name: '巽', description: '巽卦: 小亨，利有攸往，利见大人。' },
        { name: '兑', description: '兑卦: 亨，利贞。' },
        { name: '涣', description: '涣卦: 亨。王假有庙，利涉大川，利贞。' },
        { name: '节', description: '节卦: 亨，苦节不可贞。' },
        { name: '中孚', description: '中孚卦: 豚鱼吉，利涉大川，利贞。' },
        { name: '小过', description: '小过卦: 亨。利贞，可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。' },
        { name: '既济', description: '既济卦: 亨，小利贞。初吉终乱。' },
        { name: '未济', description: '未济卦: 亨。小狐汔济，濡其尾，无攸利。' }
    ];

    // 随机选择一卦
    const randomIndex = Math.floor(Math.random() * gua.length);
    const selectedGua = gua[randomIndex];

    // 显示卦象和卦辞
    document.getElementById('gua-name').innerText = selectedGua.name;
    document.getElementById('gua-description').innerText = selectedGua.description;

    // 切换到结果页面
    document.getElementById('draw-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
});

document.getElementById('back-btn').addEventListener('click', function() {
    // 返回主页面
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('draw-container').style.display = 'block';
});
