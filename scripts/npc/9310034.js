//odinms_MS
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendSimple("\t\t\t\t\t#e#r��������#bϵ��#n\r\n#d====================================================\r\n#dĿǰ�˻�ʣ����:"+ cm.getMeso() + "\r\n====================================================\r\n#k��~~~�����#b�ҿ���͵�ܳ����ģ�Ⱥ����������������㣡\r\n#k#r#e����ȫ����30��װ���������⣡#n\r\n\r\n#L1##r#e�����ҹ����������˸������Ϣ#b#n\r\n\r\n#L2#��ݮѩ�⣨ȫ����30==#r30��#k#v4000313#��#b#n\r\n\r\n#L3#èͷӥ��ȫ����30==#r30��#k#v4000313#��#b#n\r\n\r\n#L4#��ʹ��ף����ȫ����30==#r30��#k#v4000313#��#b#n\r\n\r\n#L30#�ݱ˵�����������ȫ����30==#r30��#k#v4000313#��#b#n\r\n\r\n#L6#һ������֮�Ͷ�����ȫ����30==#r30��#k#v4000313#��#b#n\r\n\r\n#L7#�������ף�ȫ����30==#r30��#k#v4000313#��");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b�������˴���飨�ؿ���#n#d\r\n====================================================#k\r\n�����������ż�Ʒװ���һ����ף��κ����ͨ������Ŭ�����ɻ��#rȫ���Լ�Ʒװ��#k��#d\r\n====================================================#k\r\n�Թ���������ʦ�忪�������굹���ˣ�Ϊ�˻�ծ����ʦ��͵͵�Ľ������װ���������ˣ���һ��Ҫ�ҵ���#d\r\n====================================================#k\r\n˳��й¶���������׬ȡ�ƽ��Ҷ�ķ�������ͨ��ÿ������ǩ��������ˢ�֡�ˢBOSS����Ҷ�һ���ã���ȥ����ʦ��ɣ�#k#d\r\n====================================================#k\r\n��Ҫ��ø�����Ϣ��ѯ����������ǵĻ��ɵ���Ⱥһ�����ۣ�#r30421239130#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e��ϲ�����ȫ����30�Ĳ�ݮѩ��.");
                cm.gainItem(1012070,30,30,30,30,30,30,3,3,0,0,30,30,3,3);
                cm.gainItem(4000313,-30);
                cm.����(3,"������word�磡����ϲ�������ȫ����30�Ĳ�ݮѩ�⣡��");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e��ϲ�����ȫ����30��èͷӥ.");
                cm.gainItem(1022047,30,30,30,30,30,30,3,3,0,0,30,30,0,0);
                cm.gainItem(4000313,-30);
                cm.����(3,"������word�磡����ϲ�������ȫ����30��èͷӥ����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e��ϲ�����ȫ����30����ʹ��ף��.");
                cm.gainItem(1112585,30,30,30,30,30,30,3,3,0,0,30,30,0,0);
                cm.gainItem(4000313,-30);
                cm.����(3,"������word�磡����ϲ�������ȫ����30����ʹ��ף������");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 30){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e��ϲ�����ȫ����30���ݱ˵���������.");
                cm.gainItem(1122007,30,30,30,30,30,30,3,3,30,30,30,30,0,0);
                cm.gainItem(4000313,-30);
                cm.����(3,"������word�磡����ϲ�������ȫ����30���ݱ˵�������������");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e��ϲ�����ȫ����30��һ������֮�Ͷ���.");
                cm.gainItem(1032080,30,30,30,30,30,30,10,10,0,0,30,30,0,0);
                cm.gainItem(4000313,-30);
                cm.����(3,"������word�磡����ϲ�������ȫ����30��һ������֮�Ͷ�������");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e��ϲ�����ȫ����30�Ĺ�������.");
                cm.gainItem(1082002,30,30,30,30,30,30,3,3,0,0,30,30,0,0);
                cm.gainItem(4000313,-30);
                cm.����(3,"������word�磡����ϲ�������ȫ����30�Ĺ������ף���");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  
             }
	}
    }
}