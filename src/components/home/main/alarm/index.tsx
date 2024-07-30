import React, { useState, useEffect } from "react";
import alert from "src/assets/imgs/main/alert.svg";
import * as S from "./index.style";

interface Notification {
  id: number;
  name: string;
  title: string;
  action: string;
  approved?: boolean;
}

const Alarm = () => {
  const [activeTab, setActiveTab] = useState<string>("내 지원");
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    
    loadNotifications(activeTab);
  }, [activeTab]);

  const loadNotifications = (tab: string) => {
   
    let data: Notification[] = [];
    if (tab === "내 지원") {
      data = [
        {
          id: 1,
          name: "김호준",
          title: "해커톤 같이 나가요",
          action: "승인됨",
          approved: true,
        },
        {
          id: 2,
          name: "신민호",
          title: "해커톤 같이 나가요",
          action: "지원완료",
        },
        {
          id: 3,
          name: "김가영",
          title: "해커톤 같이 나가요",
          action: "지원완료",
        },
      ];
    } else if (tab === "내 대회") {
      data = [
        {
          id: 1,
          name: "김호준",
          title: "리액트 처음 세팅하는 법",
          action: "승인하기",
        },
        {
          id: 2,
          name: "신민호",
          title: "리액트 처음 세팅하는 법",
          action: "승인하기",
        },
      ];
    } else if (tab === "내 게시글") {
      data = [
        {
          id: 1,
          name: "김호준",
          title: "리액트 처음 세팅하는 법",
          action: "댓글을 남겼습니다.",
        },
        {
          id: 2,
          name: "신민호",
          title: "리액트 처음 세팅하는 법",
          action: "좋아요를 남겼습니다.",
        },
        {
          id: 3,
          name: "신민호",
          title: "안녕하세요 대소고 일학년을 살아가는 법입니다.",
          action: "좋아요를 남겼습니다.",
        },
      ];
    }
    setNotifications(data);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setNotifications([]);
    setHasMore(true);
    loadNotifications(tab);
  };

  const handleApproval = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, action: "승인됨", approved: true }
          : notification
      )
    );
  };

  return (
    <S.Layout>
      <S.Padding>
        <S.Head>
          <S.HeadImg src={alert} alt="alert" />
          <S.HeadText>알림</S.HeadText>
        </S.Head>

        <S.BodyHead>
          <S.Type
            isActive={activeTab === "내 지원"}
            onClick={() => handleTabChange("내 지원")}
          >
            내 지원
          </S.Type>
          <S.Type
            isActive={activeTab === "내 대회"}
            onClick={() => handleTabChange("내 대회")}
          >
            내 대회
          </S.Type>
          <S.Type
            isActive={activeTab === "내 게시글"}
            onClick={() => handleTabChange("내 게시글")}
          >
            내 게시글
          </S.Type>
        </S.BodyHead>

        <div>
          {notifications.map((notification) => (
            <S.NotificationItem key={notification.id}>
              <S.NotificationText>
                {notification.name} - {notification.title}
              </S.NotificationText>
              {notification.approved || activeTab !== "내 대회" ? (
                <S.NotificationText>{notification.action}</S.NotificationText>
              ) : (
                <S.ApprovalButton
                  onClick={() => handleApproval(notification.id)}
                >
                  {notification.action}
                </S.ApprovalButton>
              )}
            </S.NotificationItem>
          ))}
        </div>
      </S.Padding>
    </S.Layout>
  );
};

export default Alarm;
