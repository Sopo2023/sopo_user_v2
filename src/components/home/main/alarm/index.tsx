import React, { useState, useEffect } from "react";
import alert from "src/assets/imgs/main/alert.svg";
import * as S from "./style";
import {tokenCheck} from "src/libs/tokenCheck/tokenCheck";
import SignNavigate from "src/components/common/signNavigate";
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
  const { getTokenCheck } = tokenCheck();
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
    <S.layout>
      <S.head>
        <img src={alert} alt="alert" />
        <S.headText>알림</S.headText>
      </S.head>
      <S.bodyHead>
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
      </S.bodyHead>

      <S.NotificationView>
        {getTokenCheck() ? notifications.slice(0,3).map((notification) => (
          <S.NotificationItem key={notification.id}>
            <span>
              <p>{notification.name}</p> - {notification.title}
            </span>
            {notification.approved || activeTab !== "내 대회" ? (
              <span>{notification.action}</span>
            ) : (
              <S.ApprovalButton onClick={() => handleApproval(notification.id)}>
                {notification.action}
              </S.ApprovalButton>
            )}
          </S.NotificationItem>
        )) :<SignNavigate/>}
      </S.NotificationView>
    </S.layout>
  );
};

export default Alarm;
