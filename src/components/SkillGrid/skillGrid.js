import SkillBadge from "@/components/SkillBadge/skillBadge";
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript } from 'react-icons/si';

const SkillGrid = () => {
    const colors = [
        { name: 'red', value: '#FF0000' },
        { name: 'green', value: '#00FF00' },
        { name: 'blue', value: '#0000FF' },
        { name: 'yellow', value: '#F8C246' },
        { name: 'black', value: '#000000' },
        { name: 'aqua', value: '#00FFFF' },
    ];
    return (
        <div>
            <SkillBadge icon={SiNextdotjs} text="Next.js" color="black"/>
            <SkillBadge icon={SiReact} text="React.js" color="aqua"/>
            <SkillBadge icon={SiTypescript} text="typescript" color={colors.aqua}/>
            <SkillBadge icon={SiJavascript} text="javascript" color="yellow"/>
        </div>
    );
};

export default SkillGrid;
