/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����ؼ     
 ��ϵ��ʽ��840645183  
 =====================
 */

function enter(pi) {
	var nextMap = 922010500;
	var eim = pi.getPlayer().getEventInstance()
	var target = eim.getMapInstance(nextMap);
	var targetPortal = target.getPortal("st00");
	var avail = eim.getProperty("stage4status");
	if (avail == null) {
		pi.getPlayer().dropMessage(5, "���ڻ����ܽ�����һ�׶Ρ�");
		return false;	}
	else {
		pi.getPlayer().changeMap(target, targetPortal);
		return true;
	}
}