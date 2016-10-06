const styles = {
  wrapper: {
    width: '100%',
    // border: '1px solid red',
    // boxSizing: 'border-box'
  },
	slider: {
		width: 1280,
		height: 720,
	},
	bgBlur: {
		top: '89%',
		left: '50%',
	},
	getStyles: () => {
		return {
			top: '89%',
			fontWeight: 300,
			fontSize: 60,
			color: 'rgb(86, 204, 225)',
			whiteSpace: 'nowrap',
			left: '10%',
		};
	},
	getPlus: () => {
		return {
			left: 95,
			fontWeight: 'normal',
			textAlign: 'center',
			width: 25,
			height: 25,
			fontSize: 20,
			// lineHeight: '20px',
			color: 'white',
			background: '#2196F3',
			borderRadius: 100,
			whiteSpace: 'nowrap',
		};
	},
};

styles['slideA']         = {we: styles.getStyles()};
styles.slideA['care']    = styles.getStyles();
styles.slideA['about']   = styles.getStyles();
styles.slideA['every']   = styles.getStyles();
styles.slideA['patient'] = styles.getStyles();
styles.slideA.we.left      = '14%';
styles.slideA.care.left    = '27%';
styles.slideA.about.left   = '44%';
styles.slideA.every.left   = '63%';
styles.slideA.patient.left = '82%';
const slideATextColor = 'rgb(27, 144, 218)';
styles.slideA.we.color      = slideATextColor;
styles.slideA.care.color    = slideATextColor;
styles.slideA.about.color   = slideATextColor;
styles.slideA.every.color   = slideATextColor;
styles.slideA.patient.color = slideATextColor;

styles.slideA['spectrum'] = {
	top: '88%',
	left: '50%', 
	textAlign: 'center', 
	whiteSpace: 'nowrap', 
	fontSize: 55, 
	fontWeight: 300,
	color: 'rgb(27, 144, 218)',
};

styles.slideA['hours'] = {
	top: '89%',
	left: '50%', 
	textAlign: 'center', 
	whiteSpace: 'nowrap', 
	fontSize: 55, 
	fontWeight: 400,
	color: 'rgb(27, 144, 218)',
};

const slideBTop = 270, slideBInc = 60, slideBItemsLeft = 140;
styles['slideB'] = {
	fullSpectrum: {
		top: 160,
		left: 90,
		fontWeight: 300, 
		height: 40, 
		fontSize: 35, 
		lineHeight: '39px', 
		color: '#ffffff', 
		background: '#1E88E5',
		borderRadius: 2, 
		paddingLeft: 20, 
		paddingRight: 20, 
		whiteSpace: 'nowrap'
	},
	treatment: {
		top: 200,
		left: 110,
		fontSize: 32, 
		color: '#2979FF', 
		whiteSpace: 'nowrap'
	},
	counseling: {
		top: slideBTop,
		left: slideBItemsLeft,
		fontWeight: 'normal', 
		fontSize: 30, 
		color: '#2196F3', 
		whiteSpace: 'nowrap'
	},
	clinic: {
		top: slideBTop + slideBInc,
		left: slideBItemsLeft,
		fontWeight: 'normal', 
		fontSize: 30,
		color: '#2196F3', 
		whiteSpace: 'nowrap'
	},
	pediatric: {
		top: slideBTop + slideBInc * 2,
		left: slideBItemsLeft,
		fontWeight: 'normal',
		fontSize: 30,
		color: '#2196F3',
		whiteSpace: 'nowrap'
	},
	gynecological: {
		top: slideBTop + slideBInc * 3,
		left: slideBItemsLeft,
		fontWeight: 'normal', 
		fontSize: 30, 
		color: '#2196F3', 
		whiteSpace: 'nowrap'
	},
	lab: {
		top: slideBTop + slideBInc * 4,
		left: slideBItemsLeft,
		fontWeight: 'normal', 
		fontSize: 30, 
		color: '#2196F3', 
		whiteSpace: 'nowrap'
	},
	diag: {
		top: slideBTop + slideBInc * 5,
		left: slideBItemsLeft,
		fontWeight: 'normal', 
		fontSize: 30, 
		color: '#2196F3',
		whiteSpace: 'nowrap'
	},
	pluses: []
};

for (var i = 0; i <= 5; i++) {
	var plus = styles.getPlus();
	plus.top = slideBTop + slideBInc * i + 5;
	styles.slideB['pluses'].push(plus)
}

const transitions = "15-18, 30-32, 40-43, 59-61, 69-72, 90-97";

export default () => (
  <div id="slider-wrapper" style={styles.wrapper}>
    <div id="layerslider" style={styles.slider}>
      <div className="ls-slide" data-ls={"slidedelay:22000; transition2d: " + transitions}>
        <img className="ls-bg" src="images/layerslider/image-1-720p.jpg" alt="Slide background"/>
        <img className="ls-layer" alt="Slide background blur" style={styles.bgBlur} src="images/layerslider/image-1-blur2.jpg" data-ls="offsetxin:0; delayin:0000; durationin:2000"/>
        <h2 className="ls-l" style={styles.slideA.we}       data-ls="delayin:0500; offsetxin:0; offsetyin:10; durationin:2000; offsetxout:0; offsetyout:0; durationout:1000; showuntil:4000;">WE</h2>
        <h2 className="ls-l" style={styles.slideA.care}     data-ls="delayin:0900; offsetxin:0; offsetyin:10; durationin:2000; offsetxout:0; offsetxout:0; durationout:1000; showuntil:4000;">CARE</h2>
        <h2 className="ls-l" style={styles.slideA.about}    data-ls="delayin:1300; offsetxin:0; offsetyin:10; durationin:2000; offsetxout:0; offsetxout:0; durationout:1000; showuntil:4000;">ABOUT</h2>
        <h2 className="ls-l" style={styles.slideA.every}    data-ls="delayin:1700; offsetxin:0; offsetyin:10; durationin:2000; offsetxout:0; offsetxout:0; durationout:1000; showuntil:4000;">EVERY</h2>
        <h2 className="ls-l" style={styles.slideA.patient}  data-ls="delayin:2100; offsetxin:0; offsetyin:10; durationin:2000; offsetxout:0; offsetxout:0; durationout:1000; showuntil:4000;">PATIENT</h2>
        <p className="ls-l" style={styles.slideA.spectrum} 	data-ls="delayin:9000; offsetxin:0; offsetyin:10; durationin:2000; showuntil:4000; offsetxout:0; offsetyout:-10; durationout:2000; transition2d:all;">A wide spectrum of quality medical services<br/>and treatment for all age groups</p>
        <p className="ls-l" style={styles.slideA.hours} 	  data-ls="delayin:16500; offsetxin:0; offsetyin:10; durationin:2000; showuntil:3000; offsetxout:0; offsetyout:0; durationout:2000;">Monday &ndash; Friday: 9:30 am &ndash; 7 pm</p>
      </div>

      <div className="ls-slide" data-ls={"slidedelay:9000; transition2d: " + transitions}>
        <img className="ls-bg" src="images/layerslider/image-2-720p.jpg" alt="Slide background"/>
        <p className="ls-l" style={styles.slideB.fullSpectrum} data-ls="offsetxin:0; durationin:2000; delayin:500; easingin:easeOutElastic; rotatexin:-90; transformoriginin:50% top 0; offsetxout:-200; durationout:1000;">Full Spectrum</p>
        <p className="ls-l" style={styles.slideB.treatment}    data-ls="offsetxin:0; durationin:2000; delayin:1000; easingin:easeOutElastic; rotatexin:90; transformoriginin:50% top 0; offsetxout:-400;">t r e a t m e n t</p>
        <h5 className="ls-l" style={styles.slideB.counseling} 	 data-ls="offsetxin:0; delayin:2000; easingin:easeOutQuint; scalexin:0.8; scaleyin:0.8; offsetxout:0; durationout:750; scalexout:0.8; scaleyout:0.8;">Counseling</h5>
        <h5 className="ls-l" style={styles.slideB.clinic} 		   data-ls="offsetxin:0; delayin:2500; easingin:easeOutQuint; scalexin:0.8; scaleyin:0.8; offsetxout:0; durationout:750; scalexout:0.8; scaleyout:0.8;">Cardiac Clinic</h5>
        <h5 className="ls-l" style={styles.slideB.pediatric} 	   data-ls="offsetxin:0; delayin:3000; easingin:easeOutQuint; scalexin:0.8; scaleyin:0.8; offsetxout:0; durationout:750; scalexout:0.8; scaleyout:0.8;">Pediatric Clinic</h5>
        <h5 className="ls-l" style={styles.slideB.gynecological} data-ls="offsetxin:0; delayin:3500; easingin:easeOutQuint; scalexin:0.8; scaleyin:0.8; offsetxout:0; durationout:750; scalexout:0.8; scaleyout:0.8;">Gynecological Clinic</h5>
        <h5 className="ls-l" style={styles.slideB.lab} 			     data-ls="offsetxin:0; delayin:4000; easingin:easeOutQuint; scalexin:0.8; scaleyin:0.8; offsetxout:0; durationout:750; scalexout:0.8; scaleyout:0.8;">Laboratory Analysis</h5>
        <h5 className="ls-l" style={styles.slideB.pluses[0]} data-ls="offsetxin:0; durationin:750; delayin:1800; easingin:easeOutQuint; rotatein:90; scalexin:0.5; scaleyin:0.5; offsetxout:0; durationout:750; rotateout:90; scalexout:0.5; scaleyout:0.5;"><span className="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span></h5>
        <h5 className="ls-l" style={styles.slideB.pluses[1]} data-ls="offsetxin:0; durationin:750; delayin:2300; easingin:easeOutQuint; rotatein:90; scalexin:0.5; scaleyin:0.5; offsetxout:0; durationout:750; rotateout:90; scalexout:0.5; scaleyout:0.5;"><span className="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span></h5>
        <h5 className="ls-l" style={styles.slideB.pluses[2]} data-ls="offsetxin:0; durationin:750; delayin:2800; easingin:easeOutQuint; rotatein:90; scalexin:0.5; scaleyin:0.5; offsetxout:0; durationout:750; rotateout:90; scalexout:0.5; scaleyout:0.5;"><span className="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span></h5>
        <h5 className="ls-l" style={styles.slideB.pluses[3]} data-ls="offsetxin:0; durationin:750; delayin:3300; easingin:easeOutQuint; rotatein:90; scalexin:0.5; scaleyin:0.5; offsetxout:0; durationout:750; rotateout:90; scalexout:0.5; scaleyout:0.5;"><span className="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span></h5>
        <h5 className="ls-l" style={styles.slideB.pluses[4]} data-ls="offsetxin:0; durationin:750; delayin:3800; easingin:easeOutQuint; rotatein:90; scalexin:0.5; scaleyin:0.5; offsetxout:0; durationout:750; rotateout:90; scalexout:0.5; scaleyout:0.5;"><span className="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span></h5>
      </div>

      {/* 10500 40-43, 92, 96, 97 */}
      <div className="ls-slide" data-ls={"slidedelay:10600; transition2d: " + transitions}>
        <img className="ls-bg" src="images/layerslider/image-3-720p.jpg" alt="Slide background" />
        <h4 className="ls-l" style={{top:140, left:125, whiteSpace:'nowrap', fontSize:70,  fontWeight:'normal', color:'#F50057'}} data-ls="offsetxin:0; offsetyin:top; durationin:3000; delayin:300; easingin:easeOutElastic; fadein:false; offsetxout:left; durationout:1500; showuntil:5400; easingout:easeInBack; fadeout:false;">Playful</h4>
        <h3 className="ls-l" style={{top:210, left:120, whiteSpace:'nowrap', fontSize:100, fontWeight:'normal', color:'#FF5722'}} data-ls="offsetxin:0; offsetyin:top; durationin:3000; delayin:200; easingin:easeOutElastic; fadein:false; offsetxout:left; durationout:1500; showuntil:5950; easingout:easeInBack; fadeout:false;">Pediatric</h3>
        <h4 className="ls-l" style={{top:330, left:390, whiteSpace:'nowrap', fontSize:70,  fontWeight:'normal', color:'#F50057'}} data-ls="offsetxin: 0; offsetyin: top; durationin: 3000; delayin: 100; easingin: easeOutElastic; fadein: false; offsetxout: left; durationout: 1500; showuntil: 5250; easingout: easeInBack; fadeout: false;">Care</h4>
        <h5 className="ls-l" style={{top:490, left:125, fontSize:30, color:'#FF3D00'}} data-ls="offsetxin: -100; offsetxout: 0; offsetyin: 0; offsetyout: bottom; durationin: 2500; delayin: 2000; skewxin: 60;">When medical treatment is fun :)</h5>
      </div>
    </div>
  </div>
);