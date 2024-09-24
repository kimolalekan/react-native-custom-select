var $yx6n1$reactjsxruntime = require("react/jsx-runtime");
var $yx6n1$reactnative = require("react-native");
var $yx6n1$react = require("react");
var $yx6n1$reactnativeflexboxgrid = require("react-native-flexbox-grid");
var $yx6n1$reactnativevectoriconsIonicons = require("react-native-vector-icons/Ionicons");
var $yx6n1$expocheckbox = require("expo-checkbox");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "SelectList", () => $91fc7c7f5ab63f5b$export$ed433d8050015de5);
$parcel$export(module.exports, "MultipleSelect", () => $91fc7c7f5ab63f5b$export$f9938396555c8942);







const $c9aabd5b41d525d7$var$Select = ({ data: data, value: value = "", placeholder: placeholder = "Choose one", searchResult: searchResult = "No result found", onChange: onChange, borderColor: borderColor, containerStyle: containerStyle, indexValue: indexValue = "value", icon: ReactNode })=>{
    const [show, setShow] = (0, $yx6n1$react.useState)(false);
    const [showAction, setShowAction] = (0, $yx6n1$react.useState)(false);
    const [search, setSearch] = (0, $yx6n1$react.useState)("");
    const [_value, setValue] = (0, $yx6n1$react.useState)("");
    const _data = (0, $yx6n1$react.useMemo)(()=>{
        let withSearch = data.filter((item)=>item.value?.toLowerCase().includes(search.trim().toLowerCase()));
        return search ? withSearch : data;
    }, [
        data,
        search
    ]);
    return /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnative.View), {
        style: containerStyle,
        children: [
            showAction === false ? /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TouchableWithoutFeedback), {
                onPress: ()=>{
                    setShow(true);
                    setShowAction(true);
                },
                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.View), {
                    style: {
                        borderWidth: 1,
                        borderColor: borderColor || "#444",
                        borderRadius: 10,
                        borderBottomRightRadius: show ? 0 : 10,
                        borderBottomLeftRadius: show ? 0 : 10,
                        padding: 15,
                        marginBottom: 15
                    },
                    children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnativeflexboxgrid.Row), {
                        children: [
                            /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                sm: 11,
                                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.Text), {
                                    style: {
                                        fontSize: 16
                                    },
                                    children: value ? _data.filter((item)=>item[indexValue] === value)[0]?.value : _value ? _value : placeholder
                                })
                            }),
                            /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                sm: 1,
                                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TouchableOpacity), {
                                    onPress: ()=>{
                                        setShow(true);
                                        setShowAction(true);
                                    },
                                    children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, ($parcel$interopDefault($yx6n1$reactnativevectoriconsIonicons))), {
                                        name: "caret-down",
                                        size: 20
                                    })
                                })
                            })
                        ]
                    })
                })
            }) : /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.View), {
                style: {
                    borderWidth: 1,
                    borderColor: borderColor || "#444",
                    borderRadius: 10,
                    padding: 15,
                    marginBottom: 10,
                    borderBottomRightRadius: show ? 0 : 10,
                    borderBottomLeftRadius: show ? 0 : 10
                },
                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnativeflexboxgrid.Row), {
                    children: [
                        /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                            sm: 11,
                            children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TextInput), {
                                placeholderTextColor: "#9B9B9B",
                                underlineColorAndroid: "transparent",
                                placeholder: "Search....",
                                style: {
                                    fontSize: 16
                                },
                                onChangeText: (text)=>setSearch(text)
                            })
                        }),
                        /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                            sm: 1,
                            children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TouchableOpacity), {
                                onPress: ()=>{
                                    setShowAction(false);
                                    setShow(false);
                                    setSearch("");
                                },
                                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, ($parcel$interopDefault($yx6n1$reactnativevectoriconsIonicons))), {
                                    name: "close",
                                    size: 20
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.View), {
                style: {
                    maxHeight: search ? "auto" : 200,
                    borderWidth: 1,
                    borderColor: borderColor || "#444",
                    borderRadius: 10,
                    padding: 15,
                    marginTop: show ? -10 : 0,
                    borderTopColor: show ? "transparent" : "#444",
                    borderTopRightRadius: show ? 0 : 10,
                    borderTopLeftRadius: show ? 0 : 10,
                    marginBottom: 15,
                    display: show ? "flex" : "none"
                },
                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnative.ScrollView), {
                    children: [
                        _data.map((item)=>/*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TouchableOpacity), {
                                style: {
                                    marginBottom: 10
                                },
                                onPress: ()=>{
                                    onChange(item[indexValue]);
                                    setShow(false);
                                    setShowAction(false);
                                    setValue(item.value);
                                },
                                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.Text), {
                                    style: {
                                        fontSize: 16,
                                        color: item[indexValue] === value ? "#000" : "#333"
                                    },
                                    children: item.value
                                })
                            }, item.key)),
                        _data?.length === 0 && /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.Text), {
                            style: {
                                textAlign: "center",
                                padding: 20
                            },
                            children: searchResult
                        })
                    ]
                })
            })
        ]
    });
};
var $c9aabd5b41d525d7$export$2e2bcd8739ae039 = $c9aabd5b41d525d7$var$Select;








const $7a091f821c270fb4$var$Multiple = ({ data: data, value: value = [], placeholder: placeholder = "Choose multiple", searchResult: searchResult = "No result found", onChange: onChange, borderColor: borderColor, containerStyle: containerStyle, indexValue: indexValue = "value" })=>{
    const [show, setShow] = (0, $yx6n1$react.useState)(value?.length ? true : false);
    const [showAction, setShowAction] = (0, $yx6n1$react.useState)(false);
    const [showList, setShowList] = (0, $yx6n1$react.useState)(false);
    const [search, setSearch] = (0, $yx6n1$react.useState)("");
    const [all, selectAll] = (0, $yx6n1$react.useState)(false);
    const _data = (0, $yx6n1$react.useMemo)(()=>{
        let withSearch = data.filter((item)=>item.value?.toLowerCase().includes(search.trim().toLowerCase()));
        return search ? withSearch : data;
    }, [
        data,
        search
    ]);
    const handleMultipleSelect = (val)=>{
        if (value.includes(val)) {
            let _value = value.filter((item)=>item !== val);
            onChange(_value);
        } else {
            let _value = [
                val,
                ...value
            ];
            onChange(_value);
        }
        data.length === value.length ? selectAll(true) : selectAll(false);
    };
    return /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnative.View), {
            children: [
                showAction === false ? /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TouchableWithoutFeedback), {
                    onPress: ()=>{
                        setShow(true);
                        setShowAction(true);
                        setShowList(true);
                    },
                    children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.View), {
                        style: {
                            borderWidth: 1,
                            borderColor: "#444",
                            borderRadius: 10,
                            borderBottomRightRadius: value?.length ? 0 : 10,
                            borderBottomLeftRadius: value?.length ? 0 : 10,
                            padding: 15,
                            marginBottom: 10
                        },
                        children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnativeflexboxgrid.Row), {
                            children: [
                                /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                    sm: 11,
                                    children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.Text), {
                                        style: {
                                            fontSize: 16
                                        },
                                        children: placeholder
                                    })
                                }),
                                /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                    sm: 1,
                                    children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TouchableOpacity), {
                                        onPress: ()=>{
                                            setShow(true);
                                            setShowList(true);
                                            setShowAction(true);
                                        },
                                        children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, ($parcel$interopDefault($yx6n1$reactnativevectoriconsIonicons))), {
                                            name: "caret-down",
                                            size: 20
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }) : /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.View), {
                    style: {
                        borderWidth: 1,
                        borderColor: "#444",
                        borderRadius: 10,
                        padding: 15,
                        marginBottom: 10,
                        borderBottomRightRadius: value?.length ? 0 : 10,
                        borderBottomLeftRadius: value?.length ? 0 : 10
                    },
                    children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnativeflexboxgrid.Row), {
                        children: [
                            /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                sm: 11,
                                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TextInput), {
                                    placeholderTextColor: "#9B9B9B",
                                    underlineColorAndroid: "transparent",
                                    placeholder: "Search....",
                                    style: {
                                        fontSize: 16
                                    },
                                    onChangeText: (text)=>setSearch(text)
                                })
                            }),
                            /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                sm: 1,
                                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TouchableOpacity), {
                                    onPress: ()=>{
                                        setShowList(!showList);
                                        setShowAction(false);
                                        value?.length ? setShow(true) : setShow(false);
                                        setSearch("");
                                    },
                                    children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, ($parcel$interopDefault($yx6n1$reactnativevectoriconsIonicons))), {
                                        name: "close",
                                        size: 20
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnative.View), {
                    style: {
                        height: value?.length || search ? "auto" : 350,
                        borderWidth: 1,
                        borderColor: "#444",
                        borderRadius: 10,
                        padding: 15,
                        marginTop: value?.length ? -10 : 0,
                        borderTopColor: value?.length ? "transparent" : "#444",
                        borderTopRightRadius: value?.length ? 0 : 10,
                        borderTopLeftRadius: value?.length ? 0 : 10,
                        display: show ? "flex" : "none"
                    },
                    children: [
                        /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnative.ScrollView), {
                            style: {
                                height: search ? "auto" : value?.length ? 200 : 330,
                                display: showList ? "flex" : "none"
                            },
                            children: [
                                !search && /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnativeflexboxgrid.Row), {
                                    style: {
                                        marginBottom: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                            sm: 2,
                                            children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, ($parcel$interopDefault($yx6n1$expocheckbox))), {
                                                value: all,
                                                color: all ? "#9b9b9b" : undefined,
                                                onValueChange: ()=>{
                                                    !all ? onChange(data.map((item)=>item.value)) : onChange([]);
                                                    selectAll(!all);
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                            sm: 10,
                                            children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TouchableOpacity), {
                                                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.Text), {
                                                    style: {
                                                        fontSize: 16
                                                    },
                                                    children: "Select all"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                _data.map((item)=>/*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnativeflexboxgrid.Row), {
                                        style: {
                                            marginBottom: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                                sm: 2,
                                                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, ($parcel$interopDefault($yx6n1$expocheckbox))), {
                                                    value: value.filter((_item)=>_item === item.value)?.length === 1,
                                                    color: value.filter((_item)=>_item === item.value)?.length === 1 ? "#9b9b9b" : undefined,
                                                    onValueChange: ()=>handleMultipleSelect(item.value)
                                                })
                                            }),
                                            /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                                sm: 10,
                                                children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.TouchableOpacity), {
                                                    children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.Text), {
                                                        style: {
                                                            fontSize: 16
                                                        },
                                                        children: item.value
                                                    })
                                                })
                                            })
                                        ]
                                    }, item.key)),
                                _data?.length === 0 && /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.Text), {
                                    style: {
                                        textAlign: "center",
                                        padding: 20
                                    },
                                    children: searchResult
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnative.View), {
                            style: {
                                display: value?.length ? "flex" : "none"
                            },
                            children: [
                                /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnativeflexboxgrid.Row), {
                                    style: {
                                        marginBottom: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                            sm: 3,
                                            children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsxs)((0, $yx6n1$reactnative.Text), {
                                                style: {
                                                    position: "relative",
                                                    top: 7,
                                                    fontWeight: "500",
                                                    fontSize: 12
                                                },
                                                children: [
                                                    "Selected (",
                                                    value?.length,
                                                    ")"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnativeflexboxgrid.Column), {
                                            sm: 9,
                                            style: {
                                                borderBottomWidth: 1,
                                                borderColor: "#444"
                                            },
                                            children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.Text), {
                                                children: "\xa0"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.View), {
                                    style: {
                                        flexDirection: "row",
                                        flexWrap: "wrap"
                                    },
                                    children: value.map((item, index)=>/*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.View), {
                                            style: {
                                                backgroundColor: "#808080",
                                                padding: 5,
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                borderRadius: 10,
                                                margin: 5,
                                                // marginLeft: 10,
                                                justifyContent: "center",
                                                alignItems: "center"
                                            },
                                            children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.Text), {
                                                style: {
                                                    color: "#fff",
                                                    textAlign: "center",
                                                    fontSize: 12
                                                },
                                                children: item
                                            })
                                        }, index))
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
var $7a091f821c270fb4$export$2e2bcd8739ae039 = $7a091f821c270fb4$var$Multiple;


function $91fc7c7f5ab63f5b$export$ed433d8050015de5() {
    return /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.KeyboardAvoidingView), {
        behavior: "padding",
        style: {
            flex: 1
        },
        children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)(TouchableWithoutFeedback, {
            onPress: ()=>(0, $yx6n1$reactnative.Keyboard).dismiss(),
            children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $c9aabd5b41d525d7$export$2e2bcd8739ae039), {
                ...props
            })
        })
    });
}
function $91fc7c7f5ab63f5b$export$f9938396555c8942() {
    return /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$reactnative.KeyboardAvoidingView), {
        behavior: "padding",
        style: {
            flex: 1
        },
        children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)(TouchableWithoutFeedback, {
            onPress: ()=>(0, $yx6n1$reactnative.Keyboard).dismiss(),
            children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $7a091f821c270fb4$export$2e2bcd8739ae039), {
                ...props
            })
        })
    });
}


//# sourceMappingURL=main.js.map
