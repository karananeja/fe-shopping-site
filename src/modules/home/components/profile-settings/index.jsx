import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Icons, KEYS } from '@utils/constants';
import { deleteValue } from '@utils/helpers';
import { Button, Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './profile-menu.scss';

const { Sider } = Layout;

const ProfileMenu = () => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname.split('/')[2]);
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const newActiveLink = pathname.split('/')[2];
    setActiveLink(newActiveLink);
    if (window.innerWidth <= 768) {
      setCollapsed(true);
    }
  }, [pathname]);

  const items = [
    {
      key: 'account',
      label: (
        <>
          <Icons.users className='profileMenu__icon' /> My Account
        </>
      ),
      type: 'group',
      children: [
        {
          key: 'details',
          label: 'Details',
          onClick: () => {
            navigate('details');
            setActiveLink('details');
          },
        },
        {
          key: 'address',
          label: 'Address',
          onClick: () => {
            navigate('address');
            setActiveLink('address');
          },
        },
        {
          key: 'orders',
          label: 'Orders',
          onClick: () => {
            navigate('orders');
            setActiveLink('orders');
          },
        },
        {
          key: 'account-settings',
          label: 'Account Settings',
          onClick: () => {
            navigate('account-settings');
            setActiveLink('account-settings');
          },
        },
        {
          key: 'logout',
          label: 'Logout',
          onClick: () => {
            deleteValue(KEYS.ACCESS_TOKEN);
            window.location.reload();
          },
        },
      ],
    },
  ];

  const handleMenuClick = (onClick) => {
    if (onClick) {
      onClick();
    }
    if (window.innerWidth <= 768) {
      setCollapsed(true);
    }
  };

  const menuItems = items.map((item) => ({
    ...item,
    children: item.children?.map((child) => ({
      ...child,
      onClick: () => handleMenuClick(child.onClick),
    })),
  }));

  return (
    <>
      {collapsed && (
        <Button
          className='profileMenu__toggle'
          type='primary'
          icon={<MenuUnfoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      )}
      <Sider
        className='profileMenu'
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={null}
        breakpoint='lg'
        collapsedWidth={0}
      >
        <div className='profileMenu__header'>
          <Button
            className='profileMenu__close'
            type='text'
            icon={<MenuFoldOutlined />}
            onClick={() => setCollapsed(true)}
          />
        </div>
        <Menu items={menuItems} selectedKeys={[activeLink]} />
      </Sider>
      {!collapsed && (
        <div
          className='profileMenu__overlay'
          onClick={() => setCollapsed(true)}
        />
      )}
    </>
  );
};

export default ProfileMenu;
