import React, { useState, useContext, useEffect, useRef, Fragment } from 'react';
import { makeStyles, lighten } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton$1 from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Tooltip, IconButton, Button, Menu, Avatar, Fab, Typography, ListItem as ListItem$1, ListItemIcon as ListItemIcon$1, ListItemText as ListItemText$1, Collapse as Collapse$1, List as List$1, Drawer, Paper, CircularProgress, useTheme as useTheme$1, Fade, TableCell, TextField, InputAdornment, Box, Dialog, DialogTitle, DialogContent, DialogActions, Grid as Grid$1, makeStyles as makeStyles$2 } from '@material-ui/core';
import Tooltip$1 from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ListItem from '@material-ui/core/ListItem';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import makeStyles$1 from '@material-ui/core/styles/makeStyles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CloseIcon from '@material-ui/icons/Close';
import useTheme from '@material-ui/core/styles/useTheme';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Button$1 from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import Typography$1 from '@material-ui/core/Typography';
import Link$1 from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import ResizeObserver from 'react-resize-observer';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell$1 from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '@material-ui/icons/Delete';
import '@material-ui/icons/FilterList';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CircularProgress$1 from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar$1 from '@material-ui/core/Avatar';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded$1 = ["element", "iconButton", "title", "icon", "tooltip", "children", "open"];
function MenuButton(props) {
  var element = props.element,
      iconButton = props.iconButton,
      title = props.title,
      icon = props.icon,
      tooltip = props.tooltip,
      children = props.children;
      props.open;
      var buttonProps = _objectWithoutProperties(props, _excluded$1);

  var _useState = useState(element),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  var renderIconButton = tooltip ? /*#__PURE__*/React.createElement(Tooltip, {
    title: tooltip,
    arrow: true
  }, /*#__PURE__*/React.createElement(IconButton, _extends({}, buttonProps, {
    onClick: handleClick
  }), icon, title)) : /*#__PURE__*/React.createElement(IconButton, _extends({}, buttonProps, {
    onClick: handleClick
  }), icon, title);
  var renderButton = tooltip ? /*#__PURE__*/React.createElement(Tooltip, {
    title: tooltip,
    arrow: true
  }, /*#__PURE__*/React.createElement(Button, _extends({}, buttonProps, {
    onClick: handleClick
  }), icon, title)) : /*#__PURE__*/React.createElement(Button, _extends({}, buttonProps, {
    onClick: handleClick
  }), icon, title);
  return /*#__PURE__*/React.createElement(React.Fragment, null, iconButton ? renderIconButton : renderButton, /*#__PURE__*/React.createElement(Menu, {
    anchorEl: anchorEl,
    open: Boolean(anchorEl),
    onClose: handleClose,
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    disableScrollLock: true
  }, children));
}

var LayoutContext = /*#__PURE__*/React.createContext({
  footer: 0,
  content: 0,
  open: false
});

function useLayout() {
  return useContext(LayoutContext);
}

var capitalizeWord = function capitalizeWord(msg) {
  return "".concat(msg.charAt(0).toUpperCase()).concat(msg.slice(1));
};
var capitalize = function capitalize(msg) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  return msg.toLowerCase().split(separator).map(capitalizeWord).join(separator);
};

var useStyles$c = makeStyles(function (theme) {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1 // backgroundColor: theme.palette.primary.dark

    },
    grow: {
      flexGrow: 1
    },
    collapseDrawerButton: {
      marginRight: theme.spacing(2)
    },
    sectionDesktop: _defineProperty({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'flex'
    }),
    sectionMobile: _defineProperty({
      display: 'flex'
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    menuIcon: {
      fontSize: '24'
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3)
    },
    nestedCollapse: {
      paddingLeft: theme.spacing(6)
    },
    iconButton: {
      color: theme.palette.primary.contrastText
    },
    listItemIcon: {
      minWidth: 40
    }
  };
});
AppHeader$1.propTypes = {
  /**
   * {
   *   "value": "Logo de la aplicación en la parte izquierda de la barra",
   *   "default": "null"
   * }
   */
  logo: PropTypes.any,

  /**
   * {
   *   "value": "Objecto usuario para el menu de usuario",
   *   "default": "null"
   * }
   */
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surnames: PropTypes.string.isRequired,
    email: PropTypes.string
  }),

  /**
   * {
   *   "value": "String para el tooltip del icono de cuenta de usuario",
   *   "default": "null"
   * }
   */
  tooltipProfile: PropTypes.string,

  /**
   * {
   *   "value": "Función de para cerrar sesión",
   *   "default": "() => window.location.replace('/logout')"
   * }
   */
  onLogout: PropTypes.func,

  /**
   * {
   *   "value": "Texto de logout",
   *   "default": "Cerrar Sesión"
   * }
   */
  logoutText: PropTypes.string,

  /**
   * {
   *   "value": "Icono para desplegar menu lateral",
   *   "default": "false"
   * }
   */
  drawerButton: PropTypes.bool,

  /**
   * {
   *   "value": "Menu de iconos de la parte derecha",
   *   "default": "[]"
   * }
   */
  menu: PropTypes.array,

  /**
   * {
   *   "value": "Espacio reservado a componentes personalizables en la parte derecha",
   *   "default": "<></>"
   * }
   */
  extraComponents: PropTypes.any
};
/**
 * AppHeader provee de un esqueleto básico para la barra de la aplicación. Se puede configurar para albergar los siguientes elementos
 * ( Logo de aplicación, icono para desplegar menu lateral, iconos en la parte derecha, menu de cuenta de usuario y espacio para inyectar componentes personalizados).
 * Es necesario utilizar el componente LayoutProvider por encima de este componente para su correcto funcionamiento.
 */

function AppHeader$1(props) {
  var classes = useStyles$c();

  var _useLayout = useLayout(),
      open = _useLayout.open,
      setOpen = _useLayout.setOpen;

  var logo = props.logo,
      user = props.user,
      tooltipProfile = props.tooltipProfile,
      onLogout = props.onLogout,
      logoutText = props.logoutText,
      drawerButton = props.drawerButton,
      menu = props.menu,
      extraComponents = props.extraComponents;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    position: "fixed",
    className: classes.appBar,
    id: "appbar-fixed-top"
  }, /*#__PURE__*/React.createElement(Toolbar, null, drawerButton && /*#__PURE__*/React.createElement(IconButton$1, {
    edge: "start",
    className: classes.collapseDrawerButton,
    color: "inherit",
    "aria-label": "open drawer",
    key: "menu-button-drawer",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, /*#__PURE__*/React.createElement(MenuIcon, null)), logo, /*#__PURE__*/React.createElement("div", {
    className: classes.grow
  }), /*#__PURE__*/React.createElement("div", null, extraComponents && extraComponents.map(function (component) {
    return component;
  }), menu && menu.map(function (element) {
    if (!element.submenu) {
      if (element.variant === 'link') {
        return /*#__PURE__*/React.createElement(Link, {
          to: element.uri
        }, /*#__PURE__*/React.createElement(Tooltip$1, {
          title: element.tooltip,
          key: "".concat(element.tooltip, "-iconButton")
        }, /*#__PURE__*/React.createElement(IconButton$1, {
          "aria-label": element.ariaLabel || '',
          classes: {
            root: classes.iconButton
          }
        }, element.icon)));
      } else {
        return /*#__PURE__*/React.createElement(Tooltip$1, {
          title: element.tooltip,
          key: "".concat(element.tooltip, "-iconButton")
        }, /*#__PURE__*/React.createElement(IconButton$1, {
          "aria-label": element.ariaLabel || '',
          onClick: element.handleClick,
          classes: {
            root: classes.iconButton
          }
        }, element.icon));
      }
    } else {
      return /*#__PURE__*/React.createElement(MenuButton, {
        tooltip: element.tooltip,
        iconButton: true,
        color: "inherit",
        icon: /*#__PURE__*/React.createElement(HelpOutlineIcon, null),
        key: "".concat(element.tooltip, "-menu")
      }, element.submenu.map(function (subElement, index) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          key: "".concat(subElement.name, "-").concat(index, "-menuItem"),
          onClick: subElement.handleClick
        }, subElement.name);
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.sectionDesktop
  }, user && user.name && user.surnames && /*#__PURE__*/React.createElement(MenuButton, {
    edge: "end",
    tooltip: tooltipProfile || 'Perfil',
    iconButton: true,
    color: "inherit",
    icon: /*#__PURE__*/React.createElement(Avatar, {
      className: classes.small
    }, user === null || user === void 0 ? void 0 : user.name[0]),
    key: "account-MenuButton"
  }, /*#__PURE__*/React.createElement(MenuItem, {
    key: "user-menu"
  }, /*#__PURE__*/React.createElement(ListItemIcon, {
    className: classes.listItemIcon
  }, /*#__PURE__*/React.createElement(AccountCircleIcon, {
    fontSize: "default"
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: capitalize("".concat(user === null || user === void 0 ? void 0 : user.name, " ").concat(user === null || user === void 0 ? void 0 : user.surnames))
  })), /*#__PURE__*/React.createElement(MenuItem, {
    key: "user-logout"
  }, /*#__PURE__*/React.createElement(ListItemIcon, {
    className: classes.listItemIcon
  }, /*#__PURE__*/React.createElement(PowerSettingsNewIcon, {
    fontSize: "default"
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: logoutText || 'Cerrar Sesión',
    onClick: onLogout || function () {
      return window.location.replace('/logout');
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: classes.sectionMobile
  }, extraComponents && extraComponents.map(function (component) {
    return component;
  }), /*#__PURE__*/React.createElement(MenuButton, {
    edge: "end",
    iconButton: true,
    color: "inherit",
    icon: /*#__PURE__*/React.createElement(MoreIcon, null),
    key: "more-mobile-MenuButton"
  }, /*#__PURE__*/React.createElement(MenuItem, null, /*#__PURE__*/React.createElement(ListItemIcon, {
    className: classes.listItemIcon
  }, /*#__PURE__*/React.createElement(AccountCircleIcon, {
    fontSize: "default"
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: user ? capitalize("".concat(user === null || user === void 0 ? void 0 : user.name, " ").concat(user === null || user === void 0 ? void 0 : user.surname1, " ").concat(user === null || user === void 0 ? void 0 : user.surname2)) : 'Anónimo'
  })), menu && menu.map(function (element) {
    if (!element.submenu) {
      return /*#__PURE__*/React.createElement(MenuItem, {
        key: "".concat(element.tooltip, "-menu-mobile")
      }, /*#__PURE__*/React.createElement(ListItemIcon, {
        className: classes.listItemIcon
      }, element.icon), /*#__PURE__*/React.createElement(ListItemText, {
        primary: element.tooltip
      }));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        key: "".concat(element.tooltip, "-menu-with-submenu-mobile")
      }, /*#__PURE__*/React.createElement(ListItem, {
        button: true,
        onClick: function onClick() {
          return element.handleState(!element.isCollapseOpen);
        }
      }, /*#__PURE__*/React.createElement(ListItemIcon, {
        className: classes.listItemIcon
      }, element.icon), /*#__PURE__*/React.createElement(ListItemText, {
        primary: element.tooltip
      }), element.isCollapseOpen ? /*#__PURE__*/React.createElement(ExpandLess, null) : /*#__PURE__*/React.createElement(ExpandMore, null)), /*#__PURE__*/React.createElement(Collapse, {
        in: element.isCollapseOpen,
        timeout: "auto",
        unmountOnExit: true
      }, /*#__PURE__*/React.createElement(List, {
        component: "div",
        disablePadding: true
      }, element.submenu.map(function (element, index) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          key: "".concat(element.name, "-").concat(index, "-submenuItem-mobile"),
          className: classes.nestedCollapse,
          onClick: element.handleClick
        }, element.name);
      }))));
    }
  }), /*#__PURE__*/React.createElement(MenuItem, {
    key: "user-logout-mobile"
  }, /*#__PURE__*/React.createElement(ListItemIcon, {
    className: classes.listItemIcon
  }, /*#__PURE__*/React.createElement(PowerSettingsNewIcon, {
    fontSize: "default"
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: logoutText || 'Cerrar Sesión',
    onClick: onLogout || function () {
      return window.location.replace('/logout');
    }
  })))))));
}

var useStyles$b = makeStyles$1(function (theme) {
  return {
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  };
});
function ScrollTop(props) {
  var children = props.children,
      window = props.window;
  var classes = useStyles$b();
  var trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  var handleClick = function handleClick(event) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    var anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return /*#__PURE__*/React.createElement(Zoom, {
    in: trigger
  }, /*#__PURE__*/React.createElement("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root
  }, children));
}
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,

  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

var useStyles$a = makeStyles(function (theme) {
  return {
    content: {
      flexGrow: 1,
      paddingTop: 64,
      backgroundColor: theme.palette.background.default,
      minWidth: 0,
      // So the Typography noWrap works
      minHeight: function minHeight(props) {
        return "calc(100vh - (".concat(props.footer, "px + 64px))");
      }
    }
  };
});
AppContainer$1.propTypes = {
  /**
   * {
   *   "value": "Cualquier componente React (contenido de la página)",
   *   "default": "<></>"
   * }
   */
  children: PropTypes.any
};
/**
 * AppContainer es un componente contenedor para las páginas de la aplicación. Calcula automáticamente la altura minima del contenedor para
 * que el footer siempre se coloque en la parte inferior de la pantalla. Configura un botón flotante cuando se hace scroll en la página para volver arriba.
 * Es necesario utilizar el componente LayoutProvider por encima de este componente para su correcto funcionamiento.
 */

function AppContainer$1(props) {
  var children = props.children;

  var _useLayout = useLayout(),
      dimensions = _useLayout.dimensions;

  var classes = useStyles$a(dimensions);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.content
  }, children, /*#__PURE__*/React.createElement(ScrollTop, null, /*#__PURE__*/React.createElement(Fab, {
    color: "primary",
    size: "small",
    "aria-label": "Scroll hacia arriba",
    style: {
      pointerEvents: 'all'
    }
  }, /*#__PURE__*/React.createElement(KeyboardArrowUpIcon, null))));
}

function useWindowSize() {
  var isClient = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  var _useState = useState(getSize),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  useEffect(function () {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

var useStyles$9 = makeStyles(function (theme) {
  return {
    button: {
      minHeight: 56,
      // setting height/width is optional
      width: 75
    },
    label: {
      // Aligns the content of the button vertically.
      flexDirection: 'column'
    },
    icon: {
      fontSize: '24px !important',
      marginBottom: theme.spacing(1),
      color: function color(props) {
        if (props.selected) {
          var _props$colors;

          return (props === null || props === void 0 ? void 0 : (_props$colors = props.colors) === null || _props$colors === void 0 ? void 0 : _props$colors.selectedText) || theme.palette.secondary.main;
        } else {
          var _props$colors2;

          return (props === null || props === void 0 ? void 0 : (_props$colors2 = props.colors) === null || _props$colors2 === void 0 ? void 0 : _props$colors2.text) || theme.palette.primary.contrastText;
        }
      }
    },
    text: {
      fontSize: '8.5px',
      textDecoration: 'none',
      color: function color(props) {
        if (props.selected) {
          var _props$colors3;

          return (props === null || props === void 0 ? void 0 : (_props$colors3 = props.colors) === null || _props$colors3 === void 0 ? void 0 : _props$colors3.selectedText) || theme.palette.secondary.main;
        } else {
          var _props$colors4;

          return (props === null || props === void 0 ? void 0 : (_props$colors4 = props.colors) === null || _props$colors4 === void 0 ? void 0 : _props$colors4.text) || theme.palette.primary.contrastText;
        }
      }
    }
  };
});
function VerticalItemButton$1(props) {
  var icon = props.icon,
      text = props.text;
  var classes = useStyles$9(props);
  return /*#__PURE__*/React.createElement(Button$1, {
    classes: {
      root: classes.button,
      label: classes.label
    },
    variant: "text",
    color: "primary",
    disableRipple: true
  }, /*#__PURE__*/React.cloneElement(icon, {
    className: classes.icon
  }), /*#__PURE__*/React.createElement(Typography, {
    classes: {
      root: classes.text
    }
  }, " ", text, " "));
}

var useStyles$8 = makeStyles(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    drawer: {
      flexShrink: 0,
      backgroundColor: function backgroundColor(props) {
        var _props$colors;

        return props !== null && props !== void 0 && (_props$colors = props.colors) !== null && _props$colors !== void 0 && _props$colors.background ? "".concat(props.colors.background, "!important") : "".concat(theme.palette.primary.light, "!important");
      }
    },
    drawerMobile: {
      width: function width(props) {
        var _props$sizes;

        return (props === null || props === void 0 ? void 0 : (_props$sizes = props.sizes) === null || _props$sizes === void 0 ? void 0 : _props$sizes.openWidth) || 250;
      },
      flexShrink: 0,
      backgroundColor: function backgroundColor(props) {
        var _props$colors2;

        return props !== null && props !== void 0 && (_props$colors2 = props.colors) !== null && _props$colors2 !== void 0 && _props$colors2.background ? "".concat(props.colors.background, "!important") : "".concat(theme.palette.primary.light, "!important");
      }
    },
    drawerOpen: {
      width: function width(props) {
        var _props$sizes2, _props$sizes3;

        return (props === null || props === void 0 ? void 0 : (_props$sizes2 = props.sizes) === null || _props$sizes2 === void 0 ? void 0 : _props$sizes2.openWidth) !== undefined ? props === null || props === void 0 ? void 0 : (_props$sizes3 = props.sizes) === null || _props$sizes3 === void 0 ? void 0 : _props$sizes3.openWidth : theme.spacing(33);
      },
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.complex
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.complex
      }),
      overflowX: 'hidden',
      width: function width(props) {
        var _props$sizes4;

        return (props === null || props === void 0 ? void 0 : (_props$sizes4 = props.sizes) === null || _props$sizes4 === void 0 ? void 0 : _props$sizes4.closeWidth) !== undefined ? props.sizes.closeWidth : theme.spacing(9) + 3;
      }
    },
    drawerPaper: {
      width: function width(props) {
        var _props$sizes5, _props$sizes6;

        return (props === null || props === void 0 ? void 0 : (_props$sizes5 = props.sizes) === null || _props$sizes5 === void 0 ? void 0 : _props$sizes5.openWidth) !== undefined ? props === null || props === void 0 ? void 0 : (_props$sizes6 = props.sizes) === null || _props$sizes6 === void 0 ? void 0 : _props$sizes6.openWidth : theme.spacing(33);
      }
    },
    drawerHeader: _objectSpread2(_objectSpread2({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar), {}, {
      justifyContent: 'flex-end'
    }),
    icon: {
      fontSize: '24px !important',
      color: function color(props) {
        var _props$colors3;

        return (props === null || props === void 0 ? void 0 : (_props$colors3 = props.colors) === null || _props$colors3 === void 0 ? void 0 : _props$colors3.text) || theme.palette.primary.contrastText;
      }
    },
    iconSelected: {
      fontSize: '24px !important',
      color: function color(props) {
        var _props$colors4;

        return (props === null || props === void 0 ? void 0 : (_props$colors4 = props.colors) === null || _props$colors4 === void 0 ? void 0 : _props$colors4.selectedText) || theme.palette.secondary.main;
      }
    },
    menuText: {
      color: function color(props) {
        var _props$colors5;

        return (props === null || props === void 0 ? void 0 : (_props$colors5 = props.colors) === null || _props$colors5 === void 0 ? void 0 : _props$colors5.text) || theme.palette.primary.contrastText;
      }
    },
    subMenuText: {
      color: function color(props) {
        var _props$colors6;

        return (props === null || props === void 0 ? void 0 : (_props$colors6 = props.colors) === null || _props$colors6 === void 0 ? void 0 : _props$colors6.text) || theme.palette.primary.contrastText;
      },
      paddingLeft: theme.spacing(5)
    },
    subMenuTextSelected: {
      color: function color(props) {
        return props.colors && props.colors.accent ? props.colors.accent : theme.palette.common;
      },
      paddingLeft: theme.spacing(5)
    },
    menuTextSelected: {
      color: function color(props) {
        var _props$colors7;

        return (props === null || props === void 0 ? void 0 : (_props$colors7 = props.colors) === null || _props$colors7 === void 0 ? void 0 : _props$colors7.selectedText) || theme.palette.secondary.light;
      }
    },
    menuItemSelected: {
      backgroundColor: function backgroundColor(props) {
        var _props$colors8;

        return props !== null && props !== void 0 && (_props$colors8 = props.colors) !== null && _props$colors8 !== void 0 && _props$colors8.selectedBrackground ? "".concat(props.colors.selectedBrackground, "!important") : "".concat(theme.palette.primary.main, "!important");
      }
    },
    paddingListItem: {
      paddingLeft: 24
    },
    closeMenuButton: {
      marginRight: 0,
      marginLeft: 'auto'
    },
    listItem: {
      padding: 0
    },
    ListItemTextSelected: {
      color: function color(props) {
        var _props$colors9;

        return (props === null || props === void 0 ? void 0 : (_props$colors9 = props.colors) === null || _props$colors9 === void 0 ? void 0 : _props$colors9.selectedText) || theme.palette.secondary.main;
      }
    },
    ListItemTextNoSelected: {
      color: function color(props) {
        var _props$colors10;

        return (props === null || props === void 0 ? void 0 : (_props$colors10 = props.colors) === null || _props$colors10 === void 0 ? void 0 : _props$colors10.text) || theme.palette.primary.contrastText;
      }
    },
    listItemIcon: {
      minWidth: 40
    },
    normalMenuListItemText: {
      fontSize: '1rem',
      textTransform: 'uppercase'
    }
  };
});
AppDrawer$1.propTypes = {
  /**
   * {
   *   "value": "Objecto Menu para el menu de usuario",
   *   "default": "[]"
   * }
   */
  menu: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    }))
  })),

  /**
   * {
   *   "value": "Opción para cambiar el estilo del drawer entre permanente y flotante",
   *   "default": "true"
   * }
   */
  permanent: PropTypes.bool
};
/**
 * AppDrawer provee de un drawer/menu lateral básico. Se puede configurar para tener un menu con máximo un nivle de anidación de 2 elementos.
 * Es necesario utilizar el componente LayoutProvider por encima de este componente para su correcto funcionamiento
 */

function AppDrawer$1(props) {
  var _clsx6, _clsx7;

  var classes = useStyles$8(props);
  var menu = props.menu,
      permanent = props.permanent;
  var theme = useTheme();
  var windowSize = useWindowSize();

  var _useLocation = useLocation(),
      pathname = _useLocation.pathname;

  var normalMenu = [];
  var collapseMenu = [];

  var _useState = useState(getDefaultMenuState()),
      _useState2 = _slicedToArray(_useState, 2),
      collapseMenus = _useState2[0],
      setCollapseMenus = _useState2[1];

  var _useLayout = useLayout(),
      open = _useLayout.open,
      setOpen = _useLayout.setOpen;

  useEffect(function () {
    setCollapseMenus(getDefaultMenuState());
  }, [pathname]);

  function getDefaultMenuState() {
    return menu.filter(function (m) {
      return m.childrens !== undefined;
    }).map(function (e) {
      return {
        id: e.id,
        open: false
      };
    });
  }

  function changeSelectedMenuItem(id) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setCollapseMenus(collapseMenus.map(function (m) {
      if (m.id === id) {
        return _objectSpread2(_objectSpread2({}, m), {}, {
          open: !force ? !m.open : true
        });
      } else {
        return _objectSpread2(_objectSpread2({}, m), {}, {
          open: false
        });
      }
    }));
  }

  function resetMenu() {
    setCollapseMenus(getDefaultMenuState());

    if (windowSize.width < theme.breakpoints.values.md || !permanent) {
      setOpen(false);
    }
  }

  function checkMenuNeedsToBeClosed() {
    if (windowSize.width < theme.breakpoints.values.md || !permanent) {
      setOpen(false);
    }
  }

  function openWithSubMenu(name) {
    changeSelectedMenuItem(name, true);
    setOpen(true);
  }

  menu.forEach(function (e) {
    var uriSelected = pathname === e.uri;
    var isUriPathname = pathname === e.uri;

    if (!e.childrens) {
      var _clsx;

      collapseMenu.push( /*#__PURE__*/React.createElement(Link, {
        to: e.uri,
        style: {
          textDecoration: 'none'
        },
        key: "".concat(e.id, "-desktopCollapseMenu-noChildrens")
      }, /*#__PURE__*/React.createElement(ListItem$1, {
        button: true,
        selected: uriSelected,
        classes: {
          selected: classes.menuItemSelected,
          root: classes.listItem
        }
      }, /*#__PURE__*/React.createElement(VerticalItemButton$1, {
        icon: e.icon,
        text: e.name,
        selected: isUriPathname,
        colors: props.colors
      }))));
      normalMenu.push( /*#__PURE__*/React.createElement(Link, {
        to: e.uri,
        style: {
          textDecoration: 'none'
        },
        key: "".concat(e.id, "-desktopNormalMenu-noChildrens")
      }, /*#__PURE__*/React.createElement(ListItem$1, {
        button: true,
        selected: uriSelected,
        onClick: resetMenu,
        classes: {
          selected: classes.menuItemSelected,
          root: classes.paddingListItem
        }
      }, /*#__PURE__*/React.createElement(ListItemIcon$1, {
        classes: {
          root: classes.listItemIcon
        }
      }, /*#__PURE__*/React.cloneElement(e.icon, {
        className: uriSelected ? classes.iconSelected : classes.icon
      })), /*#__PURE__*/React.createElement(ListItemText$1, {
        classes: {
          root: clsx((_clsx = {}, _defineProperty(_clsx, classes.ListItemTextSelected, uriSelected), _defineProperty(_clsx, classes.ListItemTextNoSelected, !uriSelected), _clsx))
        },
        primary: /*#__PURE__*/React.createElement(Typography, {
          className: classes.normalMenuListItemText,
          variant: "button"
        }, e.name)
      }))));
    } else {
      var _clsx2;

      var isSubmenuUri = !!e.childrens.find(function (m) {
        return m.uri === pathname;
      });
      var isOpen = collapseMenus.find(function (s) {
        return s.id === e.id;
      }).open;
      normalMenu.push( /*#__PURE__*/React.createElement("div", {
        key: "".concat(e.id, "-desktopNormalMenu-Childrens")
      }, /*#__PURE__*/React.createElement(ListItem$1, {
        button: true,
        selected: isOpen || isSubmenuUri,
        classes: {
          selected: classes.menuItemSelected,
          root: classes.paddingListItem
        },
        onClick: function onClick() {
          changeSelectedMenuItem(e.id);
        }
      }, /*#__PURE__*/React.createElement(ListItemIcon$1, {
        classes: {
          root: classes.listItemIcon
        }
      }, /*#__PURE__*/React.cloneElement(e.icon, {
        className: isOpen || isSubmenuUri ? classes.iconSelected : classes.icon
      })), /*#__PURE__*/React.createElement(ListItemText$1, {
        classes: {
          root: clsx((_clsx2 = {}, _defineProperty(_clsx2, classes.ListItemTextSelected, isOpen || isSubmenuUri), _defineProperty(_clsx2, classes.ListItemTextNoSelected, !(isOpen || isSubmenuUri)), _clsx2))
        },
        primary: /*#__PURE__*/React.createElement(Typography, {
          variant: "button",
          className: classes.normalMenuListItemText
        }, e.name)
      }), isOpen || isSubmenuUri ? /*#__PURE__*/React.createElement(ExpandLessOutlinedIcon, {
        classes: {
          root: classes.menuText
        },
        className: clsx(_defineProperty({}, classes.menuTextSelected, isOpen || isSubmenuUri))
      }) : /*#__PURE__*/React.createElement(ExpandMoreOutlinedIcon, {
        classes: {
          root: classes.menuText
        }
      })), /*#__PURE__*/React.createElement(Collapse$1, {
        in: isOpen || isSubmenuUri,
        timeout: "auto",
        unmountOnExit: true
      }, /*#__PURE__*/React.createElement(List$1, {
        compone: true,
        nt: "div",
        disablePadding: true
      }, e.childrens.map(function (c) {
        var _clsx4, _clsx5;

        return /*#__PURE__*/React.createElement(Link, {
          to: c.uri,
          style: {
            textDecoration: 'none'
          },
          key: "".concat(c.name, "-subDesktopMenu-Childrens")
        }, /*#__PURE__*/React.createElement(ListItem$1, {
          button: true,
          onClick: checkMenuNeedsToBeClosed,
          selected: isOpen || isSubmenuUri,
          classes: {
            selected: classes.menuItemSelected,
            root: pathname === c.uri ? classes.subMenuTextSelected : classes.subMenuText
          }
        }, c.icon && /*#__PURE__*/React.createElement(ListItemIcon$1, {
          classes: {
            root: clsx((_clsx4 = {}, _defineProperty(_clsx4, classes.ListItemTextSelected, pathname === c.uri), _defineProperty(_clsx4, classes.ListItemTextNoSelected, !pathname === c.uri), _clsx4))
          }
        }, c.icon), /*#__PURE__*/React.createElement(ListItemText$1, {
          classes: {
            root: clsx((_clsx5 = {}, _defineProperty(_clsx5, classes.ListItemTextSelected, pathname === c.uri), _defineProperty(_clsx5, classes.ListItemTextNoSelected, !pathname === c.uri), _clsx5))
          },
          primary: /*#__PURE__*/React.createElement(Typography, {
            variant: "body1"
          }, c.name)
        })));
      })))));
      collapseMenu.push( /*#__PURE__*/React.createElement(ListItem$1, {
        style: {
          padding: 0
        },
        onClick: function onClick() {
          return openWithSubMenu(e.id);
        },
        selected: uriSelected || isSubmenuUri,
        classes: {
          selected: classes.menuItemSelected
        },
        key: "".concat(e.id, "-desktopCollapseMenu-childrens")
      }, /*#__PURE__*/React.createElement(VerticalItemButton$1, {
        icon: e.icon,
        text: e.name,
        selected: uriSelected || isSubmenuUri,
        colors: props.colors
      })));
    }
  });

  var CustomList = function CustomList() {
    return open ? /*#__PURE__*/React.createElement(List$1, null, normalMenu) : /*#__PURE__*/React.createElement(List$1, null, collapseMenu);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, windowSize.width >= theme.breakpoints.values.md && /*#__PURE__*/React.createElement("div", null, permanent ? /*#__PURE__*/React.createElement(Drawer, {
    open: open,
    variant: "permanent",
    className: clsx((_clsx6 = {}, _defineProperty(_clsx6, classes.drawerOpen, open), _defineProperty(_clsx6, classes.drawerClose, !open), _clsx6)),
    classes: {
      paper: clsx(classes.drawer, (_clsx7 = {}, _defineProperty(_clsx7, classes.drawerOpen, open), _defineProperty(_clsx7, classes.drawerClose, !open), _defineProperty(_clsx7, classes.drawer, true), _defineProperty(_clsx7, classes.drawerTest, true), _clsx7))
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.drawerHeader
  }, /*#__PURE__*/React.createElement(ListItem$1, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton$1, {
    edge: "start",
    className: classes.collapseDrawerButton,
    color: "inherit",
    "aria-label": "open drawer",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, /*#__PURE__*/React.createElement(MenuIcon, null)))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(CustomList, null)) : /*#__PURE__*/React.createElement(Drawer, {
    anchor: "left",
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    classes: {
      paper: clsx(classes.drawerMobile)
    }
  }, /*#__PURE__*/React.createElement(IconButton$1, {
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: classes.closeMenuButton
  }, /*#__PURE__*/React.createElement(CloseIcon, null)), /*#__PURE__*/React.createElement(List$1, null, normalMenu))), windowSize.width < theme.breakpoints.values.md && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Drawer, {
    anchor: "left",
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    classes: {
      paper: clsx(classes.drawerMobile)
    }
  }, /*#__PURE__*/React.createElement(IconButton$1, {
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: classes.closeMenuButton
  }, /*#__PURE__*/React.createElement(CloseIcon, null)), /*#__PURE__*/React.createElement(List$1, null, normalMenu))));
}

var LOGOTIPO_LEYENDA = 'data:image/png;base64,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RLPm05+6FYsXL8r5eSdPvoXXXnudDUhERERERERERPOOh01ARESz4SPXfxjLll2Q8/NOnHgD33/kETYgERERERERERHNSwx2KtB4ciHO877BhiCiOauhYRXWrFmd8/NOnHgD93/7Ozh16hQbkYhodjWyCYiIiIiIiGYHg50KNKnzbSGiuWvp0iW4bsOGnJ/33PPP49FHf8pQh4ioMvjZBERERERERLODCQIREZWNz+fDbRs3ora2JqfnPff883j44e+zAYmIiIiIiIiIaN5jsENERGXzudtvyznUOXToMH755JNsPCKiCqJLj4+tQERERERENDsY7BARUVm8b+1aLF68KKfn/OCHP8Lo6BE2HhFRxZEBtgEREREREdHsYLBDRERlcdFFy1xve/r0BL7zwAN47bXX2XBERBVIEdoStgIREREREdHsYLBDRERlMT5+0tV2J0++hQcfeoihDhERERERERERUQYKm4CIiMrh8Sd+hhMn3rDd5sSJN3Dv/kGGOkRERERERERERFkw2CEiorI4deoU/uHe/fiXf/1FxsePHj2K+7/9HZw6dYqNRURVwe/3z+vzj+/Y5WcvICIiIiIiKj9OxUZERGX1+ONP4MiRZ3H9h69Dba0PAHD8+HH8+NGfsHEqQEPDKtTV1eH468eROHaMQRtRBj6fD9eu+yDWrFmNo0eP4uHvPTJfr5VGAMPsEUREREREROXFYIeIiMpubGwM//jdB9kQFcbv9+O6DRtQW1sDwJgaj1VURDN9+lO3YtmyCwAA9fX1+Nztt+Ef7t3PhiEiIiIiIqKyYLBDVAF8Ph+WLl2Ciy66CL7aWpx//vkAgMWLF58ZYE05fXoCJ06cAACMnxzH+PhJvPzyy3jttdc5+EpUofx+P5YuWYLzl5yPurqFqFtYBwBnBoazXePHjx/HqdOny3aNG1VUU/ecxYsX4XO338Zwh/23KvpvOdsj/dwXL16EQGA5Eolj7DBERERERERUcgx2qGh8Ph+uv/5DZwZ88nX69Cm8fvzEmb8ff/04Tp0+NacGS3w+HwLLl+Ndl16CC5ddiIULz3X93NramjMDSstg/Hn1B94PADh58i288uorePnlV/DCC7+tqEG0a69dh4suvNBxu+PHj+PxJ35W9mNfunQJ1n3wmjNTg9l56qlf4TcvvFDya6Hcxk+O49FHf+rY9oHAclx0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';

var useStyles$7 = makeStyles(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    appFooter: {
      borderTop: '1px solid',
      borderColor: theme.palette.divider,
      marginTop: 'auto',
      padding: theme.spacing(2, 6),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.background.default : theme.palette.grey[800]
    },
    footer: {
      padding: theme.spacing(1, 1),
      marginTop: 'auto',
      textAlign: 'center',
      borderTop: '1px solid',
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[800]
    },
    alignItemsCenterXs: {
      justifyContent: 'center'
    },
    footerConditionalFlexEndLinks: _defineProperty({
      justifyContent: 'flex-end'
    }, theme.breakpoints.down('md'), {
      justifyContent: 'center'
    }),
    footerConditionalFlexStartLinks: _defineProperty({
      justifyContent: 'flex-start'
    }, theme.breakpoints.down('md'), {
      justifyContent: 'center'
    }),
    linkFooter: {
      cursor: 'pointer'
    }
  };
});
AppFooter$1.propTypes = {
  /**
   * {
   *   "value": "Array de columnas de enlaces relacionados",
   *   "default": "[]"
   * }
   */
  appFooterColumns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func
    }))
  })),

  /**
   * {
   *   "value": "Array de links para la parte derecha del footer general ",
   *   "default": "[]"
   * }
   */
  footerRigth: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),

  /**
   * {
   *   "value": "Array de links para la parte izquierda del footer general ",
   *   "default": "[]"
   * }
   */
  footerLeft: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),

  /**
   * {
   *   "value": "Por defecto no se muestran los iconos de las redes sociales debajo del logo de la UPM",
   *   "default": "false"
   * }
   */
  icons: PropTypes.bool
};
/**
 * AppFooter es un componente que ofrece dos niveles de footer, uno para la aplicación y otro generico. Se puede configurar para mostrar
 * enlaces relacionados en columnas.
 */

function AppFooter$1(props) {
  var classes = useStyles$7();
  var appFooterColumns = props.appFooterColumns,
      icons = props.icons,
      footerLeft = props.footerLeft,
      footerRigth = props.footerRigth;

  var _useWindowSize = useWindowSize(),
      width = _useWindowSize.width,
      height = _useWindowSize.height;

  var theme = useTheme();
  var ref = useRef();

  var _useLayout = useLayout(),
      setDimensions = _useLayout.setDimensions;

  var onImgLoad = function onImgLoad(_ref) {
    _ref.target;
    setDimensions({
      footer: ref.current.offsetHeight,
      content: height - ref.current.offsetHeight + 64
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    ref: ref
  }, /*#__PURE__*/React.createElement(ResizeObserver, {
    onResize: function onResize(rect) {
      setDimensions({
        footer: rect.height,
        content: height - rect.height + 64
      });
    }
  }), /*#__PURE__*/React.createElement("footer", {
    className: classes.appFooter
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    justify: "space-between"
  }, !appFooterColumns ? /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: "auto",
    key: "app-footer-title-empty"
  }) : appFooterColumns === null || appFooterColumns === void 0 ? void 0 : appFooterColumns.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: "auto",
      key: "app-footer-title-".concat(index)
    }, /*#__PURE__*/React.createElement(List, null, /*#__PURE__*/React.createElement(ListItem, null, /*#__PURE__*/React.createElement(Typography$1, {
      variant: "body1",
      color: "primary"
    }, option.title)), option.list.map(function (children, subindex) {
      return /*#__PURE__*/React.createElement(ListItem, {
        key: "app-footer-element-".concat(index, "-").concat(subindex)
      }, /*#__PURE__*/React.createElement(Link$1, null, /*#__PURE__*/React.createElement(Typography$1, {
        variant: "caption",
        color: "textSecondary",
        onClick: children.onClick,
        className: classes.linkFooter
      }, children.title)));
    })));
  }), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: "auto"
  }, /*#__PURE__*/React.createElement(List, null, /*#__PURE__*/React.createElement(ListItem, null, /*#__PURE__*/React.createElement("img", {
    src: LOGOTIPO_LEYENDA,
    alt: "app_footer_logo",
    onLoad: onImgLoad,
    style: {
      width: '20em'
    }
  })), icons && /*#__PURE__*/React.createElement(ListItem, null, /*#__PURE__*/React.createElement(Tooltip$1, {
    title: "Linked in"
  }, /*#__PURE__*/React.createElement(IconButton$1, {
    href: "https://es.linkedin.com/school/universidad-politecnica-de-madrid/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(LinkedInIcon, null))), /*#__PURE__*/React.createElement(Tooltip$1, {
    title: "Instagram"
  }, /*#__PURE__*/React.createElement(IconButton$1, {
    href: "https://www.instagram.com/somosupm/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(InstagramIcon, null))), /*#__PURE__*/React.createElement(Tooltip$1, {
    title: "Twitter"
  }, /*#__PURE__*/React.createElement(IconButton$1, {
    href: "https://es.linkedin.com/school/universidad-politecnica-de-madrid/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(TwitterIcon, null))), /*#__PURE__*/React.createElement(Tooltip$1, {
    title: "Youtube"
  }, /*#__PURE__*/React.createElement(IconButton$1, {
    href: "http://www.youtube.com/user/UPM",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(YouTubeIcon, null))), /*#__PURE__*/React.createElement(Tooltip$1, {
    title: "Facebook"
  }, /*#__PURE__*/React.createElement(IconButton$1, {
    href: "https://www.facebook.com/universidadpolitecnicademadrid",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(FacebookIcon, null)))))))), /*#__PURE__*/React.createElement("footer", {
    className: classes.footer
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: "center"
  }, width <= theme.breakpoints.values.md ? /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    container: true,
    xs: footerLeft || footerRigth ? 6 : 12,
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Typography$1, {
    variant: "caption",
    color: "textSecondary"
  }, "Copyright \xA9 ".concat(new Date().getFullYear(), " ")), /*#__PURE__*/React.createElement(Typography$1, {
    variant: "caption",
    color: "textSecondary"
  }, /*#__PURE__*/React.createElement(Link$1, {
    color: "inherit",
    href: "https://upm.es/",
    target: "_blank"
  }, "Universidad Polit\xE9cnica de Madrid"), ' ')), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    container: true,
    md: 4,
    xs: 6
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    item: true,
    xs: "auto"
  }, footerLeft && footerLeft.map(function (element, index) {
    return /*#__PURE__*/React.createElement(Grid, {
      item: true,
      key: "".concat(element.title, "-mobile-").concat(index),
      xs: 12
    }, /*#__PURE__*/React.createElement(Link$1, {
      href: element.url,
      target: "_blank"
    }, /*#__PURE__*/React.createElement(Typography$1, {
      variant: "caption",
      className: classes.linkFooter
    }, element.title)));
  }), footerRigth && footerRigth.map(function (element, index) {
    return /*#__PURE__*/React.createElement(Grid, {
      item: true,
      key: "".concat(element.title, "-mobile-").concat(index),
      xs: 12
    }, /*#__PURE__*/React.createElement(Link$1, {
      href: element.url,
      target: "_blank"
    }, /*#__PURE__*/React.createElement(Typography$1, {
      variant: "caption",
      className: classes.linkFooter
    }, element.title)));
  })))) : /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    item: true,
    md: 4,
    xs: 12,
    direction: "row",
    alignItems: "baseline",
    classes: {
      root: classes.footerConditionalFlexEndLinks
    },
    spacing: 4
  }, footerLeft && footerLeft.map(function (element, index) {
    return /*#__PURE__*/React.createElement(Grid, {
      item: true,
      key: "".concat(element.title, "-").concat(index)
    }, /*#__PURE__*/React.createElement(Link$1, {
      href: element.url,
      target: "_blank"
    }, /*#__PURE__*/React.createElement(Typography$1, {
      variant: "caption",
      className: classes.linkFooter
    }, element.title)));
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    container: true,
    xs: 3,
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Typography$1, {
    variant: "caption",
    color: "textSecondary"
  }, "Copyright \xA9 ".concat(new Date().getFullYear())), /*#__PURE__*/React.createElement(Typography$1, {
    variant: "caption",
    color: "textSecondary"
  }, /*#__PURE__*/React.createElement(Link$1, {
    color: "inherit",
    href: "https://upm.es/"
  }, "Universidad Polit\xE9cnica de Madrid"), ' ')), /*#__PURE__*/React.createElement(Grid, {
    md: 4,
    xs: 12,
    item: true,
    container: true,
    classes: {
      root: classes.footerConditionalFlexStartLinks
    },
    spacing: 4
  }, footerRigth && footerRigth.map(function (element, index) {
    return /*#__PURE__*/React.createElement(Grid, {
      item: true,
      key: "".concat(element.title, "-").concat(index)
    }, /*#__PURE__*/React.createElement(Link$1, {
      href: element.url,
      target: "_blank"
    }, /*#__PURE__*/React.createElement(Typography$1, {
      variant: "caption",
      className: classes.linkFooter
    }, element.title)));
  }))))));
}

LayoutProvider$1.propTypes = {
  children: PropTypes.any
};
function LayoutProvider$1(props) {
  var defaultOpen = props.defaultOpen;

  var _useState = useState(defaultOpen),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState({
    footer: 0,
    content: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      dimensions = _useState4[0],
      setDimensions = _useState4[1];

  var children = props.children;
  return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
    value: {
      dimensions: dimensions,
      setDimensions: setDimensions,
      open: open,
      setOpen: setOpen
    }
  }, children);
}

EmptyData$1.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  variant: PropTypes.oneOf(['outlined', 'elevation'])
};
var useStyles$6 = makeStyles$1(function (theme) {
  return {
    center: {
      textAlign: 'center',
      padding: theme.spacing(2)
    },
    marginTop: {
      marginTop: theme.spacing(3)
    },
    marginBottom: {
      marginBottom: theme.spacing(3)
    },
    emptyPath: {
      fill: '#fafafa'
    },
    emptyEllipse: {
      fill: '#f5f5f5'
    },
    g: {
      stroke: '#d9d9d9'
    },
    simple: {
      height: '100%',
      margin: 'auto'
    }
  };
});

var Svg = function Svg() {
  var classes = useStyles$6();
  return /*#__PURE__*/React.createElement("svg", {
    className: classes.simple,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: classes.emptyEllipse,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    className: classes.g,
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: classes.emptyPath
  }))));
};

function EmptyData$1(props) {
  var classes = useStyles$6();
  var title = props.title,
      children = props.children,
      variant = props.variant;
  return /*#__PURE__*/React.createElement(Paper, {
    variant: variant || 'outlined'
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.center
  }, /*#__PURE__*/React.createElement(Svg, null), /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "primary"
  }, title), children));
}

var _excluded = ["loading", "children"];
var useStyles$5 = makeStyles(function () {
  return {
    minDimensions: {
      minWidth: function minWidth(props) {
        return props.width;
      },
      minHeight: function minHeight(props) {
        return props.height;
      }
    }
  };
});
LoadingButton$1.propTypes = {
  /**
   * {
   *   "value": "Estado loading",
   *   "default": "false"
   * }
   */
  loading: PropTypes.bool,

  /**
   * {
   *   "value": "Contenido del botón",
   *   "default": "''"
   * }
   */
  children: PropTypes.any,

  /**
   * {
   *   "value": "Color del spinner",
   *   "default": "inherit"
   * }
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),

  /**
   * {
   *   "value": "Propiedades nativas del componente de material",
   *   "default": "''"
   * }
   */
  materialProps: PropTypes.any
};
LoadingButton$1.defaultProps = {
  color: 'inherit',
  loading: false
};
/**
 * LoadingButton, botón de material-ui al que se añade la funcionalidad de cargargando respetando el tamaño del botón al poner el spinner y desabilitando el botón cuando está en este estado.
 */

function LoadingButton$1(props) {
  var ref = useRef();

  var loading = props.loading,
      children = props.children,
      materialProps = _objectWithoutProperties(props, _excluded);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var classes = useStyles$5({
    width: width,
    height: height
  });
  React.useEffect(function () {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }

    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, // children are a dep so dimensions are updated if initial contents change
  [children]);
  return /*#__PURE__*/React.createElement(Button, _extends({
    ref: ref,
    disabled: loading,
    className: "".concat(width && height ? classes.minDimensions : {})
  }, materialProps), loading ? /*#__PURE__*/React.createElement(CircularProgress, {
    size: "1.535rem",
    color: props.color || 'primary'
  }) : children);
}

var useStyles$4 = makeStyles(function (theme) {
  return {
    tableHead: {
      background: theme.palette.grey['50']
    },
    body1: {
      fontSize: '1rem'
    }
  };
});
function SimpleTable$1(props) {
  var headCells = props.headCells,
      data = props.data;
  var classes = useStyles$4();
  var theme = useTheme$1();

  if (data.length === 0) {
    return /*#__PURE__*/React.createElement(Paper, {
      variant: "outlined"
    }, /*#__PURE__*/React.createElement(EmptyData$1, {
      title: "Sin datos"
    }));
  }

  return /*#__PURE__*/React.createElement(Fade, {
    in: true,
    timeout: theme.transitions.duration.complex
  }, /*#__PURE__*/React.createElement(TableContainer, null, /*#__PURE__*/React.createElement(Table, {
    "aria-label": "simple table"
  }, /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, headCells.map(function (headCell, index) {
    return /*#__PURE__*/React.createElement(TableCell, {
      key: "".concat(headCell.id, "-").concat(index),
      align: headCell.align,
      classes: {
        root: classes.body1
      },
      padding: headCell.disablePadding ? 'none' : 'default',
      style: headCell.style
    }, headCell.label);
  }))), /*#__PURE__*/React.createElement(TableBody, null, data.map(function (row, index) {
    return /*#__PURE__*/React.createElement(TableRow, {
      key: "".concat(row, "-").concat(row, "-").concat(index)
    }, Object.entries(row).map(function (cell, index) {
      return /*#__PURE__*/React.createElement(TableCell, {
        key: "".concat(cell[0], "-").concat(cell[1], "-").concat(index),
        align: headCells[index].align
      }, cell[1]);
    }));
  })))));
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string,
  rowCount: PropTypes.number.isRequired,
  headCells: PropTypes.array.isRequired,
  isCollapseTable: PropTypes.object,
  selectedColumn: PropTypes.bool
};
({
  numSelected: PropTypes.number.isRequired
});
ComplexTable$1.propTypes = {
  headCells: PropTypes.array.isRequired,
  data: PropTypes.array,
  selectedColumn: PropTypes.bool,
  rowsPerPageOptions: PropTypes.array,
  dense: PropTypes.bool,
  defaultRowsPerPage: PropTypes.number,
  defaultOrderBy: PropTypes.string,
  labelRowsPerPage: PropTypes.string,
  noDataTitle: PropTypes.string,
  notFoundTitle: PropTypes.string
};
CustomRow.propTypes = {
  row: PropTypes.object,
  index: PropTypes.number,
  selected: PropTypes.array,
  selectedColumn: PropTypes.bool,
  isCollapseTable: PropTypes.object,
  setSelected: PropTypes.func.isRequired
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return descendingComparator(a, b, orderBy);
  } : function (a, b) {
    return -descendingComparator(a, b, orderBy);
  };
}

function stableSort(array, comparator) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function EnhancedTableHead(props) {
  var classes = props.classes,
      onSelectAllClick = props.onSelectAllClick,
      order = props.order,
      orderBy = props.orderBy,
      numSelected = props.numSelected,
      rowCount = props.rowCount,
      onRequestSort = props.onRequestSort,
      headCells = props.headCells,
      isCollapseTable = props.isCollapseTable,
      selectedColumn = props.selectedColumn,
      search = props.search;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  return /*#__PURE__*/React.createElement(TableHead, {
    classes: {
      root: classes.tableHead
    }
  }, /*#__PURE__*/React.createElement(TableRow, null, selectedColumn && /*#__PURE__*/React.createElement(TableCell$1, {
    padding: "checkbox"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: rowCount > 0 && numSelected === rowCount,
    onChange: onSelectAllClick,
    inputProps: {
      'aria-label': 'select all desserts'
    }
  })), isCollapseTable && /*#__PURE__*/React.createElement(TableCell$1, null), headCells.map(function (headCell) {
    return /*#__PURE__*/React.createElement(TableCell$1, {
      key: headCell.id,
      align: headCell.numeric ? 'right' : 'left',
      padding: headCell.disablePadding ? 'none' : 'default',
      sortDirection: orderBy === headCell.id ? order : false
    }, headCell.search ? /*#__PURE__*/React.createElement(TextField, {
      variant: "outlined",
      size: "small",
      label: headCell.label,
      onChange: search,
      id: "".concat(headCell.id),
      style: {
        width: '100%'
      },
      InputProps: {
        endAdornment: headCell.sort && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "end"
        }, /*#__PURE__*/React.createElement(TableSortLabel, {
          active: true,
          direction: orderBy === headCell.id ? order : 'asc',
          onClick: createSortHandler(headCell.id)
        }))
      }
    }) : headCell.sort ? /*#__PURE__*/React.createElement(TableSortLabel, {
      active: orderBy === headCell.id,
      direction: orderBy === headCell.id ? order : 'asc',
      onClick: createSortHandler(headCell.id)
    }, headCell.label, orderBy === headCell.id ? /*#__PURE__*/React.createElement("span", {
      className: classes.visuallyHidden,
      style: {
        marginRight: '2px'
      }
    }, order === 'desc' ? 'sorted descending' : 'sorted ascending') : null) : headCell.label);
  })));
}

function CustomRow(props) {
  var row = props.row,
      index = props.index,
      selectedColumn = props.selectedColumn,
      selected = props.selected,
      isCollapseTable = props.isCollapseTable,
      setSelected = props.setSelected;
  var labelId = "enhanced-table-checkbox-".concat(index);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var classes = useStyles$3();

  var isSelected = function isSelected(name) {
    return selected.indexOf(name) !== -1;
  };

  var handleClick = function handleClick(event, name) {
    var selectedIndex = selected.indexOf(name);
    var newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  var isItemSelected = isSelected(row.name);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableRow, {
    hover: true,
    role: "checkbox",
    "aria-checked": isItemSelected,
    tabIndex: -1,
    key: "".concat(row.name, "-").concat(row.code),
    selected: isItemSelected
  }, selectedColumn && /*#__PURE__*/React.createElement(TableCell$1, {
    padding: "checkbox",
    onClick: function onClick(event) {
      return handleClick(event, row.name);
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: isItemSelected,
    inputProps: {
      'aria-labelledby': labelId
    }
  })), isCollapseTable ? !row.collapse ? /*#__PURE__*/React.createElement(TableCell$1, null) : /*#__PURE__*/React.createElement(TableCell$1, null, /*#__PURE__*/React.createElement(IconButton$1, {
    "aria-label": "expand row",
    size: "small",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, open ? /*#__PURE__*/React.createElement(KeyboardArrowUpIcon, null) : /*#__PURE__*/React.createElement(KeyboardArrowDownIcon, null))) : null, Object.entries(row).map(function (cell) {
    if (cell[0] !== 'collapse') {
      return /*#__PURE__*/React.createElement(TableCell$1, {
        key: "".concat(cell[0], "-").concat(cell[1]),
        align: typeof cell[1] === 'number' || cell[1] === 'No disponible' ? 'right' : 'left'
      }, cell[1]);
    } else {
      return null;
    }
  })), row.collapse ? /*#__PURE__*/React.createElement(TableRow, {
    className: classes.root
  }, /*#__PURE__*/React.createElement(TableCell$1, {
    style: {
      paddingBottom: 0,
      paddingTop: 0
    },
    colSpan: 12
  }, /*#__PURE__*/React.createElement(Collapse$1, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement(Box, {
    margin: 3
  }, row.collapse)))) : /*#__PURE__*/React.createElement(React.Fragment, null));
}

makeStyles(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: lighten(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    title: {
      flex: '1 1 100%'
    }
  };
});

var useStyles$3 = makeStyles(function (theme) {
  return {
    root: {
      minWidth: '100%',
      '& > *': {
        borderBottom: 'unset'
      }
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1
    },
    tableHead: {
      background: theme.palette.grey['50']
    }
  };
});
function ComplexTable$1(props) {
  var classes = useStyles$3();
  var theme = useTheme$1();
  var headCells = props.headCells,
      data = props.data,
      selectedColumn = props.selectedColumn,
      dense = props.dense,
      rowsPerPageOptions = props.rowsPerPageOptions,
      defaultRowsPerPage = props.defaultRowsPerPage,
      defaultOrderBy = props.defaultOrderBy,
      labelRowsPerPage = props.labelRowsPerPage,
      noDataTitle = props.noDataTitle,
      notFoundTitle = props.notFoundTitle;

  var _useState = useState('asc'),
      _useState2 = _slicedToArray(_useState, 2),
      order = _useState2[0],
      setOrder = _useState2[1];

  var _useState3 = useState(defaultOrderBy),
      _useState4 = _slicedToArray(_useState3, 2),
      orderBy = _useState4[0],
      setOrderBy = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selected = _useState6[0],
      setSelected = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      page = _useState8[0],
      setPage = _useState8[1];

  var _useState9 = useState(defaultRowsPerPage),
      _useState10 = _slicedToArray(_useState9, 2),
      rowsPerPage = _useState10[0],
      setRowsPerPage = _useState10[1];

  var _useState11 = useState(data),
      _useState12 = _slicedToArray(_useState11, 2),
      filteredData = _useState12[0],
      setFilteredData = _useState12[1];

  var sortedPage = stableSort(filteredData, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  var isCollapseTable = sortedPage.find(function (row) {
    return row.collapse;
  });

  var _useState13 = useState(headCells.filter(function (head) {
    return head.search !== undefined;
  }).map(function (h) {
    return {
      id: h.id,
      value: ''
    };
  })),
      _useState14 = _slicedToArray(_useState13, 2),
      filters = _useState14[0],
      setFilters = _useState14[1];

  var handleSearch = function handleSearch(event) {
    var index = filters.findIndex(function (filter) {
      return filter.id === event.target.id;
    });

    var tmpFilter = _toConsumableArray(filters);

    tmpFilter[index].value = event.target.value;
    setFilters(tmpFilter);

    var tmpData = _toConsumableArray(data);

    filters.forEach(function (filter) {
      tmpData = tmpData.filter(function (row) {
        return row[filter.id].toString().toLowerCase().includes(filter === null || filter === void 0 ? void 0 : filter.value.toLowerCase());
      });
    });
    setFilteredData(tmpData);
  };

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = filteredData.map(function (n) {
        return n.name;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredData.length - page * rowsPerPage);

  var displayRowLabels = function displayRowLabels(_ref) {
    var from = _ref.from,
        to = _ref.to,
        count = _ref.count;
    return "".concat(from, "-").concat(to, " de ").concat(count);
  };

  if (data.length === 0) {
    return /*#__PURE__*/React.createElement(Paper, {
      variant: "outlined"
    }, /*#__PURE__*/React.createElement(EmptyData$1, {
      title: noDataTitle
    }));
  }

  return /*#__PURE__*/React.createElement(Fade, {
    in: true,
    timeout: theme.transitions.duration.complex
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(TableContainer, null, /*#__PURE__*/React.createElement(Table, {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    size: dense ? 'small' : 'medium',
    "aria-label": "enhanced table"
  }, filteredData.length === 0 && /*#__PURE__*/React.createElement("caption", null, notFoundTitle), /*#__PURE__*/React.createElement(EnhancedTableHead, {
    classes: classes,
    numSelected: selected.length,
    order: order,
    orderBy: orderBy,
    search: handleSearch,
    onSelectAllClick: handleSelectAllClick,
    onRequestSort: handleRequestSort,
    rowCount: filteredData.length,
    headCells: headCells,
    selectedColumn: selectedColumn,
    isCollapseTable: isCollapseTable
  }), /*#__PURE__*/React.createElement(TableBody, null, sortedPage.map(function (row, index) {
    return /*#__PURE__*/React.createElement(CustomRow, {
      dense: dense,
      setSelected: setSelected,
      selected: selected,
      selectedColumn: selectedColumn,
      isCollapseTable: isCollapseTable,
      key: "customRow-".concat(row.name, "-").concat(index),
      row: row,
      index: index
    });
  }), emptyRows > 0 && (filteredData.length > rowsPerPage || filteredData.length > 5) && /*#__PURE__*/React.createElement(TableRow, {
    style: {
      height: (dense ? 33 : 53) * emptyRows
    }
  }, /*#__PURE__*/React.createElement(TableCell$1, {
    colSpan: 12
  }))))), /*#__PURE__*/React.createElement(TablePagination, {
    rowsPerPageOptions: rowsPerPageOptions,
    labelDisplayedRows: displayRowLabels,
    labelRowsPerPage: labelRowsPerPage,
    component: "div",
    count: filteredData.length,
    rowsPerPage: rowsPerPage || 5,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  })));
}

LoadingButton$1.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
  open: PropTypes.bool.isRequired,
  rightButtonText: PropTypes.string,
  leftButtonText: PropTypes.string,
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
  setOpen: PropTypes.func
};
function Modal$1(props) {
  var title = props.title,
      content = props.content,
      open = props.open,
      rightButtonText = props.rightButtonText,
      leftButtonText = props.leftButtonText,
      handleSubmit = props.handleSubmit,
      loading = props.loading,
      setOpen = props.setOpen;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    fullWidth: true
  }, /*#__PURE__*/React.createElement(DialogTitle, null, title), /*#__PURE__*/React.createElement(DialogContent, null, typeof content === 'string' ? /*#__PURE__*/React.createElement(Typography, {
    variant: "body2"
  }, content) : content), /*#__PURE__*/React.createElement(DialogActions, null, leftButtonText && /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpen(false);
    },
    disabled: loading
  }, leftButtonText), /*#__PURE__*/React.createElement(LoadingButton$1, {
    variant: "contained",
    color: "primary",
    onClick: handleSubmit,
    loading: loading
  }, rightButtonText)));
}

var useStyles$2 = makeStyles(function () {
  return {
    root: {
      minHeight: function minHeight(props) {
        return "calc(100vh - (".concat(props.footer, "px + 64px))");
      }
    },
    linearContent: {
      width: '100%'
    }
  };
});
LoaderPage$1.prototype = {
  linear: PropTypes.bool,
  color: PropTypes.string
};
function LoaderPage$1(props) {
  var linear = props.linear,
      color = props.color;

  var _useLayout = useLayout(),
      dimensions = _useLayout.dimensions;

  var classes = useStyles$2(dimensions);
  return /*#__PURE__*/React.createElement(Grid$1, {
    container: true,
    justify: "center",
    alignItems: "center",
    className: classes.root
  }, linear ? /*#__PURE__*/React.createElement(Grid$1, {
    xs: 7,
    item: true
  }, /*#__PURE__*/React.createElement(LinearProgress, {
    color: color || 'primary'
  })) : /*#__PURE__*/React.createElement(Grid$1, {
    xs: "auto",
    item: true
  }, /*#__PURE__*/React.createElement(CircularProgress$1, {
    color: color || 'primary'
  })), /*#__PURE__*/React.createElement(Grid$1, {
    xs: "auto",
    item: true
  }));
}

var useStyles$1 = makeStyles$2(function (theme) {
  return {
    root: {
      maxWidth: '100%'
    },
    avatar: {
      backgroundColor: theme.palette.secondary.main,
      width: theme.spacing(10),
      height: theme.spacing(10)
    },
    text: {
      fontWeight: 401
    }
  };
});
UserCard$1.prototype = {
  name: PropTypes.string,
  subheader: PropTypes.string,
  columns: PropTypes.array,
  image: PropTypes.string,
  cardProps: PropTypes.any
};
function UserCard$1(props) {
  var classes = useStyles$1();
  var name = props.name,
      subheader = props.subheader,
      columns = props.columns,
      image = props.image,
      cardProps = props.cardProps;
  return /*#__PURE__*/React.createElement(Fade, {
    in: true
  }, /*#__PURE__*/React.createElement(Card, _extends({
    className: classes.root,
    variant: "outlined"
  }, cardProps), /*#__PURE__*/React.createElement(CardHeader, {
    avatar: /*#__PURE__*/React.createElement(Avatar$1, {
      "aria-label": "imagen-tarjeta-usuario",
      src: "data:image/png;base64, ".concat(image),
      classes: {
        root: classes.avatar
      }
    }, /*#__PURE__*/React.createElement(Typography$1, {
      variant: "h4"
    }, name[0])),
    title: /*#__PURE__*/React.createElement(Typography$1, {
      variant: "h5"
    }, name),
    subheader: /*#__PURE__*/React.createElement(Typography$1, {
      variant: "body1",
      color: "textSecondary"
    }, subheader)
  }), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Grid$1, {
    container: true,
    direction: "row",
    spacing: 3
  }, columns === null || columns === void 0 ? void 0 : columns.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Grid$1, {
      key: index,
      item: true,
      container: true,
      direction: "column",
      spacing: 3,
      xs: true
    }, option.map(function (item) {
      return /*#__PURE__*/React.createElement(Grid$1, {
        item: true
      }, /*#__PURE__*/React.createElement(Typography$1, {
        variant: "body1",
        className: classes.text
      }, item.title), /*#__PURE__*/React.createElement(Typography$1, {
        variant: "body2",
        color: "textSecondary",
        component: "p"
      }, item.subtitle));
    }));
  })))));
}

var useStyles = makeStyles(function (theme) {
  return {
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12)
    },
    card: {
      height: '100%',
      minWidth: '100%'
    }
  };
});
WelcomeAvatar$1.prototype = {
  text: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  message: PropTypes.string
};
function WelcomeAvatar$1(props) {
  var _useLayout = useLayout(),
      dimensions = _useLayout.dimensions;

  var text = props.text,
      name = props.name,
      image = props.image,
      message = props.message;
  var classes = useStyles(dimensions);
  var theme = useTheme$1();
  return /*#__PURE__*/React.createElement(Grid$1, {
    container: true,
    direction: "column",
    justify: "center",
    alignItems: "center",
    style: {
      paddingTop: theme.spacing(10)
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    alt: "user image",
    src: "data:image/png;base64, ".concat(image),
    className: classes.large
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h3"
  }, name[0])), /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    gutterBottom: true,
    style: {
      margin: '0.67em',
      textAlign: 'center'
    }
  }, text), /*#__PURE__*/React.createElement(Typography, {
    variant: "button",
    display: "block",
    gutterBottom: true,
    style: {
      textAlign: 'justify',
      paddingBottom: '1em'
    }
  }, message));
}

var AppHeader = function AppHeader(props) {
  return /*#__PURE__*/React.createElement(AppHeader$1, props);
};
var AppDrawer = function AppDrawer(props) {
  return /*#__PURE__*/React.createElement(AppDrawer$1, props);
};
var AppContainer = function AppContainer(props) {
  return /*#__PURE__*/React.createElement(AppContainer$1, props);
};
var AppFooter = function AppFooter(props) {
  return /*#__PURE__*/React.createElement(AppFooter$1, props);
};
var LoadingButton = function LoadingButton(props) {
  return /*#__PURE__*/React.createElement(LoadingButton$1, props);
};
var EmptyData = function EmptyData(props) {
  return /*#__PURE__*/React.createElement(EmptyData$1, props);
};
var LayoutProvider = function LayoutProvider(props) {
  return /*#__PURE__*/React.createElement(LayoutProvider$1, props);
};
var VerticalItemButton = function VerticalItemButton(props) {
  return /*#__PURE__*/React.createElement(VerticalItemButton$1, props);
};
var SimpleTable = function SimpleTable(props) {
  return /*#__PURE__*/React.createElement(SimpleTable$1, props);
};
var ComplexTable = function ComplexTable(props) {
  return /*#__PURE__*/React.createElement(ComplexTable$1, props);
};
var Modal = function Modal(props) {
  return /*#__PURE__*/React.createElement(Modal$1, props);
};
var LoaderPage = function LoaderPage(props) {
  return /*#__PURE__*/React.createElement(LoaderPage$1, props);
};
var WelcomeAvatar = function WelcomeAvatar(props) {
  return /*#__PURE__*/React.createElement(WelcomeAvatar$1, props);
};
var UserCard = function UserCard(props) {
  return /*#__PURE__*/React.createElement(UserCard$1, props);
};

export { AppContainer, AppDrawer, AppFooter, AppHeader, ComplexTable, EmptyData, LayoutProvider, LoaderPage, LoadingButton, Modal, SimpleTable, UserCard, VerticalItemButton, WelcomeAvatar, useLayout, useWindowSize };
//# sourceMappingURL=index.js.map
