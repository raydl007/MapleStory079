/*
	NPC Name: 		Asia
	Map(s): 		Kamuna
 */
var status = -1;

function start() {
    if (cm.getMapId() == 802000110) {
        if (cm.getPlayer().getClient().getChannel() != 2) {
            cm.sendOk("�μ�Զ�������뵽 2 Ƶ��.");
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("NamelessMagicMonster");

        if (em == null) {
            cm.sendOk("�ű�����������ϵ����Ա.");
            cm.dispose();
            return;
        }
        //	var prop = em.getProperty("NibergenSummoned");

        //	if (((prop.equals("PQCleared") || (prop.equals("1")) && cm.getPlayerCount(802000211) == 0)) || prop.equals("0") || prop == null) {
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var squadAvailability = cm.getSquadAvailability("nmm_squad");
            if (squadAvailability == -1) {
                status = 0;
                cm.sendYesNo("�����ΪԶ���ӳ���");

            } else if (squadAvailability == 1) {
                // -1 = Cancelled, 0 = not, 1 = true
                var type = cm.isSquadLeader("nmm_squad");
                if (type == -1) {
                    cm.sendOk("Զ�����Ѿ�ע��.�����·���.");
                    cm.dispose();
                } else if (type == 0) {
                    var memberType = cm.isSquadMember("nmm_squad");
                    if (memberType == 2) {
                        cm.sendOk("�㱻�����Ʋ����������ܽ���Զ������.");
                        cm.dispose();
                    } else if (memberType == 1) {
                        status = 5;
                        cm.sendSimple("�����ʲô? \r\n#b#L0#�鿴Զ����#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�뿪Զ����#l");
                    } else if (memberType == -1) {
                        cm.sendOk("Զ�����Ѿ�ע���������·���");
                        cm.dispose();
                    } else {
                        status = 5;
                        cm.sendSimple("�����ʲô? \r\n#b#L0#�鿴Զ����#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�뿪Զ����#l");
                    }
                } else { // Is leader
                    status = 10;
                    cm.sendSimple("������ʲô?Զ���ӳ��� \r\n#b#L0#�鿴Զ����#l \r\n#b#L1#�Ʋ�Զ����Ա#l \r\n#b#L2#�鿴�Ʋ�����#l \r\n#r#L3#��ʼԶ������#l");
                    // TODO viewing!
                }
            } else {
                var eim = cm.getDisconnected("NamelessMagicMonster");
                if (eim == null) {
                    var squd = cm.getSquad("NamelessMagicMonster");
                    if (squd != null) {
                        cm.sendYesNo("Զ�������Ѿ���ʼ.\r\n" + squd.getNextPlayer());
                        status = 3;
                    } else {
                        cm.sendOk("Զ�������Ѿ���ʼ");
                        cm.safeDispose();
                    }
                } else {
                    cm.sendYesNo("��Ҫ����Զ��������?");
                    status = 2;
                }
            }
        } else {
            var eim = cm.getDisconnected("NamelessMagicMonster");
            if (eim == null) {
                var squd = cm.getSquad("NamelessMagicMonster");
                if (squd != null) {
                    cm.sendYesNo("Զ�������Ѿ���ʼ\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("Զ�������Ѿ���ʼ");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("��Ҫ��������Զ��������?");
                status = 2;
            }
        }
    } else {
        status = 25;
        cm.sendNext("�����˳�Զ������?");
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("nmm_squad", 5, " �Ѿ���ΪԶ���ӳ����������μ�Զ����������5�����ڼ���Զ���ӡ�")) {
                cm.sendOk("���Ѿ���ΪԶ���ӳ�������5���������������Զ�����飬����ʼԶ������");
            } else {
                cm.sendOk("δ֪���󡣳�ΪԶ���ӳ�ʧ��");
            }
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd("NamelessMagicMonster", "nmm_squad")) {
            cm.sendOk("���󡣡�������һ��");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("NamelessMagicMonster");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("You have reserved the spot.");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("nmm_squad", 0)) {
                cm.sendOk("����δ֪�Ĵ��󣬶�Զ���ӵ�Ҫ�󱻾ܾ���");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("nmm_squad", true);
            if (ba == 2) {
                cm.sendOk("Զ���������Ѿ��㹻�����Ժ�����");
            } else if (ba == 1) {
                cm.sendOk("����Զ���ӳɹ�");
            } else {
                cm.sendOk("���Ѿ�����Զ������.");
            }
        } else { // withdraw
            var baa = cm.addMember("nmm_squad", false);
            if (baa == 1) {
                cm.sendOk("�˳�Զ���ӳɹ�");
            } else {
                cm.sendOk("�㻹û�м���Զ����.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("nmm_squad", 0)) {
                    cm.sendOk("����δ֪�Ĵ��󣬶�Զ���ӵ�Ҫ�󱻾ܾ���");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("nmm_squad", 1)) {
                    cm.sendOk("����δ֪�Ĵ��󣬶�Զ���ӵ�Ҫ�󱻾ܾ���");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("nmm_squad", 2)) {
                    cm.sendOk("����δ֪�Ĵ��󣬶�Զ���ӵ�Ҫ�󱻾ܾ���");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("nmm_squad") != null) {
                    var dd = cm.getEventManager("NamelessMagicMonster");
                    dd.startInstance(cm.getSquad("nmm_squad"), cm.getMap());
                } else {
                    cm.sendOk("����δ֪�Ĵ��󣬶�Զ���ӵ�Ҫ�󱻾ܾ���");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("nmm_squad", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("nmm_squad", selection);
        }
        cm.dispose();
        break;
    case 25:
        cm.warp(802000110, 0);
        cm.dispose();
        break;
    }
}