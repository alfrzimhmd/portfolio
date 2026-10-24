import {
  SiFlutter,
  SiDart,
  SiReact,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiPython,
  SiFigma,
  SiGit,
  SiFirebase,
  SiBootstrap,
  SiNodedotjs,
  SiHtml5,
  SiDocker,
  SiTypescript,
  SiGnubash,
  SiGithub
} from 'react-icons/si';

import {
  FaMicrosoft,
  FaFileExcel,
  FaFileWord,
  FaFilePowerpoint,
  FaAndroid,
  FaApple,
  FaTerminal
} from 'react-icons/fa';

import {
  GiMagnifyingGlass,
  GiProcessor,
  GiCpu,
  GiMicroscope
} from 'react-icons/gi';

import {
  MdSecurity,
  MdAnalytics,
  MdCode,
  MdPhoneAndroid
} from 'react-icons/md';

import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    { name: 'Mobile Development', percentage: 95 },
    { name: 'Web Development', percentage: 73 },
    { name: 'UI/UX Design', percentage: 85 },
    { name: 'Reverse Engineering', percentage: 75 },
    { name: 'Database Management', percentage: 70 },
    { name: 'Problem Solving', percentage: 87 },
    { name: 'Version Control (Git)', percentage: 90 },
    { name: 'Microsoft Office', percentage: 80 }
  ];

  const techIcons = [
    // === LAPISAN 1: POJOK-POJOK (4 icon) ===
    { 
      id: 1, 
      icon: SiFlutter, 
      name: 'Flutter', 
      percentage: 80,
      color: '#00B4D8',
      position: 'pos-top-left',
      rotation: -12
    },
    { 
      id: 2, 
      icon: SiReact, 
      name: 'React', 
      percentage: 70,
      color: '#61DAFB',
      position: 'pos-top-right',
      rotation: 8
    },
    { 
      id: 3, 
      icon: SiPhp, 
      name: 'PHP', 
      percentage: 70,
      color: '#777BB4',
      position: 'pos-bottom-left',
      rotation: -8
    },
    { 
      id: 4, 
      icon: SiMysql, 
      name: 'MySQL', 
      percentage: 65,
      color: '#00758F',
      position: 'pos-bottom-right',
      rotation: 6
    },

    // === LAPISAN 2: SISI KANAN-KIRI (6 icon) ===
    { 
      id: 5, 
      icon: SiDart, 
      name: 'Dart', 
      percentage: 75,
      color: '#00B4D8',
      position: 'pos-mid-left-1',
      rotation: -5
    },
    { 
      id: 6, 
      icon: SiLaravel, 
      name: 'Laravel', 
      percentage: 65,
      color: '#FF2D20',
      position: 'pos-mid-right-1',
      rotation: 10
    },
    { 
      id: 7, 
      icon: SiFigma, 
      name: 'Figma', 
      percentage: 85,
      color: '#F24E1E',
      position: 'pos-mid-left-2',
      rotation: 5
    },
    { 
      id: 8, 
      icon: SiTypescript,
      name: 'TypeScript', 
      percentage: 65,
      color: '#3178C6',
      position: 'pos-mid-right-2',
      rotation: -7
    },
    { 
      id: 9, 
      icon: SiHtml5, 
      name: 'HTML5', 
      percentage: 85,
      color: '#E34F26',
      position: 'pos-mid-left-3',
      rotation: -8
    },
    { 
      id: 10, 
      icon: SiJavascript, 
      name: 'JavaScript', 
      percentage: 75,
      color: '#F7DF1E',
      position: 'pos-mid-right-3',
      rotation: 8
    },

    // === LAPISAN 3: ATAS-BAWAH (6 icon) ===
    { 
      id: 11, 
      icon: SiGit, 
      name: 'Git', 
      percentage: 90,
      color: '#F05032',
      position: 'pos-top-mid-1',
      rotation: 15
    },
    { 
      id: 12, 
      icon: SiPython, 
      name: 'Python', 
      percentage: 55,
      color: '#3776AB',
      position: 'pos-top-mid-2',
      rotation: -10
    },
    { 
      id: 13, 
      icon: SiGithub, 
      name: 'GitHub', 
      percentage: 85,
      color: '#181717',
      position: 'pos-top-mid-3',
      rotation: 8
    },
    { 
      id: 14, 
      icon: SiFirebase, 
      name: 'Firebase', 
      percentage: 60,
      color: '#FFCA28',
      position: 'pos-bottom-mid-1',
      rotation: -12
    },
    { 
      id: 15, 
      icon: SiBootstrap, 
      name: 'Bootstrap', 
      percentage: 70,
      color: '#7952B3',
      position: 'pos-bottom-mid-2',
      rotation: 10
    },
    { 
      id: 16, 
      icon: SiNodedotjs, 
      name: 'Node.js', 
      percentage: 60,
      color: '#339933',
      position: 'pos-bottom-mid-3',
      rotation: -8
    },

    // === LAPISAN 4: DALAM (8 icon) ===
    { 
      id: 17, 
      icon: FaAndroid, 
      name: 'Android', 
      percentage: 70,
      color: '#3DDC84',
      position: 'pos-inner-top-left',
      rotation: -15
    },
    { 
      id: 18, 
      icon: FaApple, 
      name: 'iOS', 
      percentage: 65,
      color: '#A2AAAD',
      position: 'pos-inner-top-right',
      rotation: 12
    },
    { 
      id: 19, 
      icon: SiDocker, 
      name: 'Docker', 
      percentage: 50,
      color: '#2496ED',
      position: 'pos-inner-mid-left',
      rotation: -6
    },
    { 
      id: 20, 
      icon: SiGnubash, 
      name: 'Bash', 
      percentage: 60,
      color: '#4EAA25',
      position: 'pos-inner-mid-right',
      rotation: 9
    },
    { 
      id: 21, 
      icon: FaFileExcel, 
      name: 'Excel', 
      percentage: 75,
      color: '#217346',
      position: 'pos-inner-bottom-left',
      rotation: -10
    },
    { 
      id: 22, 
      icon: FaFileWord, 
      name: 'Word', 
      percentage: 80,
      color: '#2B579A',
      position: 'pos-inner-bottom-right',
      rotation: 8
    },
    { 
      id: 23, 
      icon: FaFilePowerpoint, 
      name: 'PowerPoint', 
      percentage: 70,
      color: '#B7472A',
      position: 'pos-inner-top-mid',
      rotation: -20
    },
    { 
      id: 24, 
      icon: FaMicrosoft, 
      name: 'Office 365', 
      percentage: 75,
      color: '#00A4EF',
      position: 'pos-inner-bottom-mid',
      rotation: 15
    },

    // === LAPISAN 5: TENGAH (6 icon) - Reverse Engineering Tools ===
    { 
      id: 25, 
      icon: GiMagnifyingGlass, 
      name: 'Ghidra', 
      percentage: 60,
      color: '#FF6B35',
      position: 'pos-center-1',
      rotation: -8
    },
    { 
      id: 26, 
      icon: MdSecurity, 
      name: 'IDA Pro', 
      percentage: 55,
      color: '#FF1493',
      position: 'pos-center-2',
      rotation: 8
    },
    { 
      id: 27, 
      icon: GiProcessor, 
      name: 'Frida', 
      percentage: 65,
      color: '#9B59B6',
      position: 'pos-center-3',
      rotation: -8
    },
    { 
      id: 28, 
      icon: MdCode, 
      name: 'Radare2', 
      percentage: 50,
      color: '#00FF87',
      position: 'pos-center-4',
      rotation: 8
    },
    { 
      id: 29, 
      icon: GiMicroscope, 
      name: 'Asset Ripper', 
      percentage: 70,
      color: '#FFD700',
      position: 'pos-center-5',
      rotation: -12
    },
    { 
      id: 30, 
      icon: MdAnalytics, 
      name: 'APKTool', 
      percentage: 65,
      color: '#00BCD4',
      position: 'pos-center-6',
      rotation: 12
    },

    // === LAPISAN 6: EKSTRA (4 icon) ===
    { 
      id: 31, 
      icon: FaTerminal, 
      name: 'Terminal', 
      percentage: 80,
      color: '#64f4ab',
      position: 'pos-extra-1',
      rotation: -20
    },
    { 
      id: 32, 
      icon: GiCpu, 
      name: 'x64dbg', 
      percentage: 45,
      color: '#FF6B6B',
      position: 'pos-extra-2',
      rotation: 18
    },
    { 
      id: 33, 
      icon: MdPhoneAndroid, 
      name: 'Mobile RE', 
      percentage: 60,
      color: '#FFA500',
      position: 'pos-extra-3',
      rotation: -15
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-subtitle">My Arsenal</span>
          <h2 className="section-title">Skills & <span className="title-highlight">Technologies</span></h2>
          <div className="title-line"></div>
        </div>

        <div className="skills-content">
          <div className="skills-icons-container">
            {techIcons.map((item) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.id} 
                  className={`skill-icon-item ${item.position}`}
                  style={{ 
                    '--rotation': `${item.rotation}deg`,
                    '--icon-color': item.color 
                  }}
                >
                  <div className="icon-wrapper">
                    <IconComponent 
                      size={44} 
                      color={item.color}
                    />
                    <span className="icon-percentage">{item.percentage}%</span>
                  </div>
                  <span className="icon-name">{item.name}</span>
                </div>
              );
            })}
          </div>

          <div className="skills-center">
            <div className="skills-card">
              <h3 className="skills-card-title">Proficiency</h3>
              <div className="skills-list">
                {skillCategories.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;