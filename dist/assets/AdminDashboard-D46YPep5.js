import { a as getAdminDashboardSummary, g as __toESM, i as require_jsx_runtime, p as require_react, t as useSession } from "./index-BM41bWnP.js";
import { $ as selectDomainFromUserPreference, A as PolarLabelListContextProvider, At as get, B as combineAppliedValues, C as useMouseClickItemDispatch, Ct as useAppSelector, D as findAllByType, Dt as interpolate, E as Shape, Et as getPercentValue, F as arrayTooltipSearcher, G as combineGraphicalItemsData, H as combineAxisDomainWithNiceTicks, I as ZIndexLayer, J as combineNumericalDomain, K as combineGraphicalItemsSettings, L as selectActiveTooltipDataKey, M as Text, Mt as svgPropertiesNoEvents, N as Cell, Nt as svgPropertiesNoEventsFromUnknown, O as getClassNameFromUnknown, Ot as isNumber, P as Tooltip, Pt as clsx, Q as selectDomainDefinition, R as selectActiveTooltipGraphicalItemId, S as SetTooltipEntrySettings, St as useAppDispatch, T as useMouseLeaveItemDispatch, Tt as adaptEventsOfChild, U as combineDisplayedData, V as combineAxisDomain, W as combineDomainOfAllAppliedNumericalValuesIncludingErrorValues, X as selectAllErrorBarSettings, Y as itemAxisPredicate, Z as selectBaseAxis, _ as RegisterGraphicalItemId, _t as DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, a as ReportChartProps, at as DefaultZIndexes, b as matchAppend, bt as getValueByDataKey, c as initialEventSettingsState, ct as selectChartDataSliceIgnoringIndexes, d as XAxis, dt as polarToCartesian, et as selectRealScaleType, f as Bar, ft as Curve, g as SetPolarGraphicalItem, gt as selectChartOffsetInternal, h as ChartDataContextProvider, ht as ResponsiveContainer, i as ReportEventSettings, it as pickAxisType, j as PolarLabelContextProvider, jt as Layer, k as LabelListFromLabelProp, kt as mathSign, l as updatePolarOptions, lt as Sector, m as CartesianGrid, mt as usePolarChartLayout, n as BarChart, nt as combineCheckedDomain, o as ReportMainChartProps, ot as selectStackOffsetType, p as Area, pt as selectChartLayout, q as combineNiceTicks, r as CategoricalChart, rt as pickAxisId, s as RechartsStoreProvider, st as selectChartDataAndAlwaysIgnoreIndexes, t as AreaChart, tt as selectRenderableAxisSettings, u as YAxis, ut as getMaxRadius, v as AnimatedItems, vt as DATA_ITEM_INDEX_ATTRIBUTE_NAME, w as useMouseEnterItemDispatch, wt as resolveDefaultProps, x as SetPolarLegendPayload, xt as createSelector, y as useAnimationCallbacks, yt as getTooltipNameProp, z as selectActiveTooltipIndex } from "./AreaChart-Cv4X_IYY.js";
import { i as categoryRevenue, n as adminVendors, o as salesData, r as alerts, t as adminOrders } from "./adminData-rxTk4z3f.js";
//#region node_modules/recharts/es6/state/selectors/polarSelectors.js
var selectUnfilteredPolarItems = (state) => state.graphicalItems.polarItems;
var selectAxisPredicate = createSelector([pickAxisType, pickAxisId], itemAxisPredicate);
var selectPolarItemsSettings = createSelector([
	selectUnfilteredPolarItems,
	selectBaseAxis,
	selectAxisPredicate
], combineGraphicalItemsSettings);
var selectPolarGraphicalItemsData = createSelector([selectPolarItemsSettings], combineGraphicalItemsData);
var selectPolarDisplayedData = createSelector([selectPolarGraphicalItemsData, selectChartDataAndAlwaysIgnoreIndexes], combineDisplayedData);
var selectPolarAppliedValues = createSelector([
	selectPolarDisplayedData,
	selectBaseAxis,
	selectPolarItemsSettings
], combineAppliedValues);
createSelector([
	selectPolarDisplayedData,
	selectBaseAxis,
	selectPolarItemsSettings
], (data, axisSettings, items) => {
	if (items.length > 0) return data.flatMap((entry) => {
		return items.flatMap((item) => {
			var _axisSettings$dataKey;
			return {
				value: getValueByDataKey(entry, (_axisSettings$dataKey = axisSettings.dataKey) !== null && _axisSettings$dataKey !== void 0 ? _axisSettings$dataKey : item.dataKey),
				errorDomain: []
			};
		});
	}).filter(Boolean);
	if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) return data.map((item) => ({
		value: getValueByDataKey(item, axisSettings.dataKey),
		errorDomain: []
	}));
	return data.map((entry) => ({
		value: entry,
		errorDomain: []
	}));
});
var unsupportedInPolarChart = () => void 0;
var selectDomainOfAllPolarAppliedNumericalValues = createSelector([
	selectPolarDisplayedData,
	selectBaseAxis,
	selectPolarItemsSettings,
	selectAllErrorBarSettings,
	pickAxisType,
	selectChartDataSliceIgnoringIndexes
], combineDomainOfAllAppliedNumericalValuesIncludingErrorValues);
var selectPolarNumericalDomain = createSelector([
	selectBaseAxis,
	selectDomainDefinition,
	selectDomainFromUserPreference,
	unsupportedInPolarChart,
	selectDomainOfAllPolarAppliedNumericalValues,
	unsupportedInPolarChart,
	selectChartLayout,
	pickAxisType
], combineNumericalDomain);
var selectPolarAxisDomain = createSelector([
	selectBaseAxis,
	selectChartLayout,
	selectPolarDisplayedData,
	selectPolarAppliedValues,
	selectStackOffsetType,
	pickAxisType,
	selectPolarNumericalDomain
], combineAxisDomain);
var selectPolarNiceTicks = createSelector([
	selectPolarAxisDomain,
	selectRenderableAxisSettings,
	selectRealScaleType
], combineNiceTicks);
var selectPolarAxisDomainIncludingNiceTicks = createSelector([
	selectBaseAxis,
	selectPolarAxisDomain,
	selectPolarNiceTicks,
	pickAxisType
], combineAxisDomainWithNiceTicks);
createSelector([selectRealScaleType, selectPolarAxisDomainIncludingNiceTicks], combineCheckedDomain);
//#endregion
//#region node_modules/recharts/es6/state/selectors/pieSelectors.js
function ownKeys$3(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$3(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$3(Object(t), !0).forEach(function(r) {
			_defineProperty$3(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$3(e, r, t) {
	return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$3(t) {
	var i = _toPrimitive$3(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$3(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var pickId = (_state, id) => id;
var selectSynchronisedPieSettings = createSelector([selectUnfilteredPolarItems, pickId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "pie").find((item) => item.id === id));
var emptyArray = [];
var pickCells = (_state, _id, cells) => {
	if ((cells === null || cells === void 0 ? void 0 : cells.length) === 0) return emptyArray;
	return cells;
};
var selectDisplayedData = createSelector([
	selectChartDataAndAlwaysIgnoreIndexes,
	selectSynchronisedPieSettings,
	pickCells
], (_ref, pieSettings, cells) => {
	var chartData = _ref.chartData;
	if (pieSettings == null) return;
	var displayedData;
	if ((pieSettings === null || pieSettings === void 0 ? void 0 : pieSettings.data) != null && pieSettings.data.length > 0) displayedData = pieSettings.data;
	else displayedData = chartData;
	if ((!displayedData || !displayedData.length) && cells != null) displayedData = cells.map((cell) => _objectSpread$3(_objectSpread$3({}, pieSettings.presentationProps), cell.props));
	if (displayedData == null) return;
	return displayedData;
});
var selectPieLegend = createSelector([
	selectDisplayedData,
	selectSynchronisedPieSettings,
	pickCells
], (displayedData, pieSettings, cells) => {
	if (displayedData == null || pieSettings == null) return;
	return displayedData.map((entry, i) => {
		var _cells$i;
		var name = getValueByDataKey(entry, pieSettings.nameKey, pieSettings.name);
		var color;
		if (cells !== null && cells !== void 0 && (_cells$i = cells[i]) !== null && _cells$i !== void 0 && (_cells$i = _cells$i.props) !== null && _cells$i !== void 0 && _cells$i.fill) color = cells[i].props.fill;
		else if (typeof entry === "object" && entry != null && "fill" in entry) color = entry.fill;
		else color = pieSettings.fill;
		return {
			value: getTooltipNameProp(name, pieSettings.dataKey),
			dataKey: pieSettings.dataKey,
			color,
			payload: entry,
			type: pieSettings.legendType
		};
	});
});
var selectPieSectors = createSelector([
	selectDisplayedData,
	selectSynchronisedPieSettings,
	pickCells,
	selectChartOffsetInternal
], (displayedData, pieSettings, cells, offset) => {
	if (pieSettings == null || displayedData == null) return;
	return computePieSectors({
		offset,
		pieSettings,
		displayedData,
		cells
	});
});
//#endregion
//#region node_modules/recharts/es6/polar/Pie.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var _excluded$1 = ["key"];
var _excluded2 = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
];
var _excluded3 = ["id"];
var _excluded4 = ["id"];
function _extends$1() {
	return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$1.apply(null, arguments);
}
function _objectWithoutProperties$1(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$1(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys$2(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$2(Object(t), !0).forEach(function(r) {
			_defineProperty$2(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$2(e, r, t) {
	return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
	var i = _toPrimitive$2(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$2(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* The `label` prop in Pie accepts a variety of alternatives.
*/
/**
* We spread the data object into the sector data item,
* so we can't really know what is going to be inside.
*
* This type represents our best effort, but it all depends on the input data
* and what is inside of it.
*
* https://github.com/recharts/recharts/issues/6380
* https://github.com/recharts/recharts/discussions/6375
*/
/**
* Internal props, combination of external props + defaultProps + private Recharts state
*/
var defaultPieSectorShape = Sector;
function SetPiePayloadLegend(props) {
	var cells = (0, import_react.useMemo)(() => findAllByType(props.children, Cell), [props.children]);
	var legendPayload = useAppSelector((state) => selectPieLegend(state, props.id, cells));
	if (legendPayload == null) return null;
	return /*#__PURE__*/ import_react.createElement(SetPolarLegendPayload, { legendPayload });
}
function getActiveShapeFill(activeShape) {
	if (activeShape == null || typeof activeShape === "boolean" || typeof activeShape === "function") return;
	if (/*#__PURE__*/ import_react.isValidElement(activeShape)) {
		var _activeShape$props;
		var _fill = (_activeShape$props = activeShape.props) === null || _activeShape$props === void 0 ? void 0 : _activeShape$props.fill;
		return typeof _fill === "string" ? _fill : void 0;
	}
	var fill = activeShape.fill;
	return typeof fill === "string" ? fill : void 0;
}
var SetPieTooltipEntrySettings = /*#__PURE__*/ import_react.memo((_ref) => {
	var dataKey = _ref.dataKey, nameKey = _ref.nameKey, sectors = _ref.sectors, stroke = _ref.stroke, strokeWidth = _ref.strokeWidth, fill = _ref.fill, name = _ref.name, hide = _ref.hide, tooltipType = _ref.tooltipType, formatter = _ref.formatter, id = _ref.id, activeShape = _ref.activeShape;
	var activeShapeFill = getActiveShapeFill(activeShape);
	var tooltipEntrySettings = {
		dataDefinedOnItem: sectors.map((sector) => {
			var sectorTooltipPayload = sector.tooltipPayload;
			if (activeShapeFill == null || sectorTooltipPayload == null) return sectorTooltipPayload;
			return sectorTooltipPayload.map((item) => _objectSpread$2(_objectSpread$2({}, item), {}, {
				color: activeShapeFill,
				fill: activeShapeFill
			}));
		}),
		getPosition: (index) => {
			var _sectors$Number;
			return (_sectors$Number = sectors[Number(index)]) === null || _sectors$Number === void 0 ? void 0 : _sectors$Number.tooltipPosition;
		},
		settings: {
			stroke,
			strokeWidth,
			fill,
			dataKey,
			nameKey,
			name: getTooltipNameProp(name, dataKey),
			hide,
			type: tooltipType,
			color: fill,
			unit: "",
			formatter,
			graphicalItemId: id
		}
	};
	return /*#__PURE__*/ import_react.createElement(SetTooltipEntrySettings, { tooltipEntrySettings });
});
var getTextAnchor = (x, cx) => {
	if (x > cx) return "start";
	if (x < cx) return "end";
	return "middle";
};
var getOuterRadius = (dataPoint, outerRadius, maxPieRadius) => {
	if (typeof outerRadius === "function") return getPercentValue(outerRadius(dataPoint), maxPieRadius, maxPieRadius * .8);
	return getPercentValue(outerRadius, maxPieRadius, maxPieRadius * .8);
};
var parseCoordinateOfPie = (pieSettings, offset, dataPoint) => {
	var top = offset.top, left = offset.left, width = offset.width, height = offset.height;
	var maxPieRadius = getMaxRadius(width, height);
	return {
		cx: left + getPercentValue(pieSettings.cx, width, width / 2),
		cy: top + getPercentValue(pieSettings.cy, height, height / 2),
		innerRadius: getPercentValue(pieSettings.innerRadius, maxPieRadius, 0),
		outerRadius: getOuterRadius(dataPoint, pieSettings.outerRadius, maxPieRadius),
		maxRadius: pieSettings.maxRadius || Math.sqrt(width * width + height * height) / 2
	};
};
var parseDeltaAngle = (startAngle, endAngle) => {
	return mathSign(endAngle - startAngle) * Math.min(Math.abs(endAngle - startAngle), 360);
};
var renderLabelLineItem = (option, props) => {
	if (/*#__PURE__*/ import_react.isValidElement(option)) return /*#__PURE__*/ import_react.cloneElement(option, props);
	if (typeof option === "function") return option(props);
	var className = clsx("recharts-pie-label-line", typeof option !== "boolean" ? option.className : "");
	props.key;
	var otherProps = _objectWithoutProperties$1(props, _excluded$1);
	return /*#__PURE__*/ import_react.createElement(Curve, _extends$1({}, otherProps, {
		type: "linear",
		className
	}));
};
var renderLabelItem = (option, props, value) => {
	if (/*#__PURE__*/ import_react.isValidElement(option)) return /*#__PURE__*/ import_react.cloneElement(option, props);
	var label = value;
	if (typeof option === "function") {
		label = option(props);
		if (/*#__PURE__*/ import_react.isValidElement(label)) return label;
	}
	var className = clsx("recharts-pie-label-text", getClassNameFromUnknown(option));
	return /*#__PURE__*/ import_react.createElement(Text, _extends$1({}, props, {
		alignmentBaseline: "middle",
		className
	}), label);
};
function PieLabels(_ref2) {
	var sectors = _ref2.sectors, props = _ref2.props, showLabels = _ref2.showLabels;
	var label = props.label, labelLine = props.labelLine, dataKey = props.dataKey;
	if (!showLabels || !label || !sectors) return null;
	var pieProps = svgPropertiesNoEvents(props);
	var customLabelProps = svgPropertiesNoEventsFromUnknown(label);
	var customLabelLineProps = svgPropertiesNoEventsFromUnknown(labelLine);
	var offsetRadius = typeof label === "object" && "offsetRadius" in label && typeof label.offsetRadius === "number" && label.offsetRadius || 20;
	var labels = sectors.map((entry, i) => {
		var midAngle = (entry.startAngle + entry.endAngle) / 2;
		var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
		var labelProps = _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, pieProps), entry), {}, { stroke: "none" }, customLabelProps), {}, {
			index: i,
			textAnchor: getTextAnchor(endPoint.x, entry.cx)
		}, endPoint);
		var lineProps = _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, pieProps), entry), {}, {
			fill: "none",
			stroke: entry.fill
		}, customLabelLineProps), {}, {
			index: i,
			points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
			key: "line"
		});
		return /*#__PURE__*/ import_react.createElement(ZIndexLayer, {
			zIndex: DefaultZIndexes.label,
			key: "label-".concat(entry.startAngle, "-").concat(entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
		}, /*#__PURE__*/ import_react.createElement(Layer, null, labelLine && renderLabelLineItem(labelLine, lineProps), renderLabelItem(label, labelProps, getValueByDataKey(entry, dataKey))));
	});
	return /*#__PURE__*/ import_react.createElement(Layer, { className: "recharts-pie-labels" }, labels);
}
function PieLabelList(_ref3) {
	var sectors = _ref3.sectors, props = _ref3.props, showLabels = _ref3.showLabels;
	var label = props.label;
	if (typeof label === "object" && label != null && "position" in label) return /*#__PURE__*/ import_react.createElement(LabelListFromLabelProp, { label });
	return /*#__PURE__*/ import_react.createElement(PieLabels, {
		sectors,
		props,
		showLabels
	});
}
function PieSectors(props) {
	var sectors = props.sectors, activeShape = props.activeShape, inactiveShapeProp = props.inactiveShape, allOtherPieProps = props.allOtherPieProps, shape = props.shape, id = props.id, animationElapsedTime = props.animationElapsedTime, isAnimating = props.isAnimating, isEntrance = props.isEntrance;
	var activeIndex = useAppSelector(selectActiveTooltipIndex);
	var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
	var activeGraphicalItemId = useAppSelector(selectActiveTooltipGraphicalItemId);
	var onMouseEnterFromProps = allOtherPieProps.onMouseEnter, onItemClickFromProps = allOtherPieProps.onClick, onMouseLeaveFromProps = allOtherPieProps.onMouseLeave, restOfAllOtherProps = _objectWithoutProperties$1(allOtherPieProps, _excluded2);
	var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherPieProps.dataKey, id);
	var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
	var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherPieProps.dataKey, id);
	if (sectors == null || sectors.length === 0) return null;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, sectors.map((entry, i) => {
		if ((entry === null || entry === void 0 ? void 0 : entry.startAngle) === 0 && (entry === null || entry === void 0 ? void 0 : entry.endAngle) === 0 && sectors.length !== 1) return null;
		var graphicalItemMatches = activeGraphicalItemId == null || activeGraphicalItemId === id;
		var isActive = String(i) === activeIndex && (activeDataKey == null || allOtherPieProps.dataKey === activeDataKey) && graphicalItemMatches;
		var sectorOptions = activeShape && isActive ? activeShape : activeIndex ? inactiveShapeProp : null;
		var sectorProps = _objectSpread$2(_objectSpread$2({}, entry), {}, {
			stroke: entry.stroke,
			tabIndex: -1,
			index: i,
			isActive,
			animationElapsedTime,
			isAnimating,
			isEntrance,
			[DATA_ITEM_INDEX_ATTRIBUTE_NAME]: i,
			[DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: id
		});
		return /*#__PURE__*/ import_react.createElement(Layer, _extends$1({
			key: "sector-".concat(entry === null || entry === void 0 ? void 0 : entry.startAngle, "-").concat(entry === null || entry === void 0 ? void 0 : entry.endAngle, "-").concat(entry.midAngle, "-").concat(i),
			tabIndex: -1,
			className: "recharts-pie-sector"
		}, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
			onMouseEnter: onMouseEnterFromContext(entry, i),
			onMouseLeave: onMouseLeaveFromContext(entry, i),
			onClick: onClickFromContext(entry, i)
		}), /*#__PURE__*/ import_react.createElement(Shape, {
			option: sectorOptions !== null && sectorOptions !== void 0 ? sectorOptions : shape,
			DefaultShape: defaultPieSectorShape,
			shapeProps: sectorProps
		}));
	}));
}
function computePieSectors(_ref4) {
	var _pieSettings$paddingA;
	var pieSettings = _ref4.pieSettings, displayedData = _ref4.displayedData, cells = _ref4.cells, offset = _ref4.offset;
	var cornerRadius = pieSettings.cornerRadius, startAngle = pieSettings.startAngle, endAngle = pieSettings.endAngle, dataKey = pieSettings.dataKey, nameKey = pieSettings.nameKey, tooltipType = pieSettings.tooltipType;
	var minAngle = Math.abs(pieSettings.minAngle);
	var deltaAngle = parseDeltaAngle(startAngle, endAngle);
	var absDeltaAngle = Math.abs(deltaAngle);
	var paddingAngle = displayedData.length <= 1 ? 0 : (_pieSettings$paddingA = pieSettings.paddingAngle) !== null && _pieSettings$paddingA !== void 0 ? _pieSettings$paddingA : 0;
	var notZeroItemCount = displayedData.filter((entry) => getValueByDataKey(entry, dataKey, 0) !== 0).length;
	var totalPaddingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
	var sum = displayedData.reduce((result, entry) => {
		var val = getValueByDataKey(entry, dataKey, 0);
		return result + (isNumber(val) ? val : 0);
	}, 0);
	var effectiveMinAngle = minAngle > 0 && sum > 0 && displayedData.some((entry) => {
		var val = getValueByDataKey(entry, dataKey, 0);
		var percent = (isNumber(val) ? val : 0) / sum;
		return val !== 0 && percent * absDeltaAngle < minAngle;
	}) ? minAngle : 0;
	var realTotalAngle = absDeltaAngle - notZeroItemCount * effectiveMinAngle - totalPaddingAngle;
	var sectors;
	if (sum > 0) {
		var prev;
		sectors = displayedData.map((entry, i) => {
			var val = getValueByDataKey(entry, dataKey, 0);
			var name = getValueByDataKey(entry, nameKey, i);
			var coordinate = parseCoordinateOfPie(pieSettings, offset, entry);
			var percent = (isNumber(val) ? val : 0) / sum;
			var tempStartAngle;
			var entryWithCellInfo = _objectSpread$2(_objectSpread$2({}, entry), cells && cells[i] && cells[i].props);
			var sectorColor = entryWithCellInfo != null && "fill" in entryWithCellInfo && typeof entryWithCellInfo.fill === "string" ? entryWithCellInfo.fill : pieSettings.fill;
			if (i) tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
			else tempStartAngle = startAngle;
			var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? effectiveMinAngle : 0) + percent * realTotalAngle);
			var midAngle = (tempStartAngle + tempEndAngle) / 2;
			var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
			var tooltipPayload = [{
				name,
				value: val,
				payload: entryWithCellInfo,
				dataKey,
				type: tooltipType,
				color: sectorColor,
				fill: sectorColor,
				graphicalItemId: pieSettings.id
			}];
			var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
			prev = _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, pieSettings.presentationProps), {}, {
				percent,
				cornerRadius: typeof cornerRadius === "string" ? parseFloat(cornerRadius) : cornerRadius,
				name,
				tooltipPayload,
				midAngle,
				middleRadius,
				tooltipPosition
			}, entryWithCellInfo), coordinate), {}, {
				value: val,
				dataKey,
				startAngle: tempStartAngle,
				endAngle: tempEndAngle,
				payload: entryWithCellInfo,
				paddingAngle: val !== 0 ? mathSign(deltaAngle) * paddingAngle : 0
			});
			return prev;
		});
	}
	return sectors;
}
function PieLabelListProvider(_ref5) {
	var showLabels = _ref5.showLabels, sectors = _ref5.sectors, children = _ref5.children;
	var labelListEntries = (0, import_react.useMemo)(() => {
		if (!showLabels || !sectors) return [];
		return sectors.map((entry) => ({
			value: entry.value,
			payload: entry.payload,
			clockWise: false,
			parentViewBox: void 0,
			viewBox: {
				cx: entry.cx,
				cy: entry.cy,
				innerRadius: entry.innerRadius,
				outerRadius: entry.outerRadius,
				startAngle: entry.startAngle,
				endAngle: entry.endAngle,
				clockWise: false
			},
			fill: entry.fill
		}));
	}, [sectors, showLabels]);
	return /*#__PURE__*/ import_react.createElement(PolarLabelListContextProvider, { value: showLabels ? labelListEntries : void 0 }, children);
}
var defaultPieAnimateItems = (items, animationElapsedTime) => {
	if (items == null) return [];
	var stepData = [];
	var firstNonRemoved = items.find((item) => item.status !== "removed");
	var curAngle = firstNonRemoved ? firstNonRemoved.next.startAngle : 0;
	items.forEach((item, index) => {
		if (item.status === "removed") return;
		var paddingAngle = index > 0 ? get(item.next, "paddingAngle", 0) : 0;
		if (item.status === "matched") {
			var angle = interpolate(item.prev.endAngle - item.prev.startAngle, item.next.endAngle - item.next.startAngle, animationElapsedTime);
			var latest = _objectSpread$2(_objectSpread$2({}, item.next), {}, {
				startAngle: curAngle + paddingAngle,
				endAngle: curAngle + angle + paddingAngle
			});
			stepData.push(latest);
			curAngle = latest.endAngle;
		} else {
			var deltaAngle = interpolate(0, item.next.endAngle - item.next.startAngle, animationElapsedTime);
			var _latest = _objectSpread$2(_objectSpread$2({}, item.next), {}, {
				startAngle: curAngle + paddingAngle,
				endAngle: curAngle + deltaAngle + paddingAngle
			});
			stepData.push(_latest);
			curAngle = _latest.endAngle;
		}
	});
	return stepData;
};
function SectorsWithAnimation(_ref6) {
	var _firstSector$cx, _firstSector$cy, _firstSector$innerRad, _firstSector$outerRad;
	var props = _ref6.props, previousSectorsRef = _ref6.previousSectorsRef, id = _ref6.id;
	var sectors = props.sectors, activeShape = props.activeShape, inactiveShape = props.inactiveShape, animationInterpolateFn = props.animationInterpolateFn;
	var _useAnimationCallback = useAnimationCallbacks(props.onAnimationStart, props.onAnimationEnd), isAnimating = _useAnimationCallback.isAnimating, handleAnimationStart = _useAnimationCallback.handleAnimationStart, handleAnimationEnd = _useAnimationCallback.handleAnimationEnd;
	var layout = usePolarChartLayout();
	if (layout == null) return null;
	var firstSector = sectors[0];
	return /*#__PURE__*/ import_react.createElement(PieLabelListProvider, {
		showLabels: !isAnimating,
		sectors
	}, /*#__PURE__*/ import_react.createElement(AnimatedItems, {
		animationInput: props,
		animationIdPrefix: "recharts-pie-",
		items: sectors,
		previousItemsRef: previousSectorsRef,
		isAnimationActive: props.isAnimationActive,
		animationBegin: props.animationBegin,
		animationDuration: props.animationDuration,
		animationEasing: props.animationEasing,
		onAnimationStart: handleAnimationStart,
		onAnimationEnd: handleAnimationEnd,
		animationInterpolateFn,
		animationMatchBy: props.animationMatchBy,
		layout
	}, (stepData, animationElapsedTime, isEntrance) => /*#__PURE__*/ import_react.createElement(Layer, null, /*#__PURE__*/ import_react.createElement(PieSectors, {
		sectors: stepData,
		activeShape,
		inactiveShape,
		allOtherPieProps: props,
		shape: props.shape,
		id,
		animationElapsedTime,
		isAnimating: isAnimating || animationElapsedTime < 1,
		isEntrance
	}))), /*#__PURE__*/ import_react.createElement(PieLabelList, {
		showLabels: !isAnimating,
		sectors,
		props
	}), /*#__PURE__*/ import_react.createElement(PolarLabelContextProvider, {
		cx: (_firstSector$cx = firstSector === null || firstSector === void 0 ? void 0 : firstSector.cx) !== null && _firstSector$cx !== void 0 ? _firstSector$cx : 0,
		cy: (_firstSector$cy = firstSector === null || firstSector === void 0 ? void 0 : firstSector.cy) !== null && _firstSector$cy !== void 0 ? _firstSector$cy : 0,
		innerRadius: (_firstSector$innerRad = firstSector === null || firstSector === void 0 ? void 0 : firstSector.innerRadius) !== null && _firstSector$innerRad !== void 0 ? _firstSector$innerRad : 0,
		outerRadius: (_firstSector$outerRad = firstSector === null || firstSector === void 0 ? void 0 : firstSector.outerRadius) !== null && _firstSector$outerRad !== void 0 ? _firstSector$outerRad : 0,
		startAngle: props.startAngle,
		endAngle: props.endAngle,
		clockWise: false
	}, props.children));
}
var defaultPieProps = {
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: defaultPieAnimateItems,
	animationMatchBy: matchAppend,
	cx: "50%",
	cy: "50%",
	dataKey: "value",
	endAngle: 360,
	fill: "#808080",
	hide: false,
	innerRadius: 0,
	isAnimationActive: "auto",
	label: false,
	labelLine: true,
	legendType: "rect",
	minAngle: 0,
	nameKey: "name",
	outerRadius: "80%",
	paddingAngle: 0,
	rootTabIndex: 0,
	shape: defaultPieSectorShape,
	startAngle: 0,
	stroke: "#fff",
	zIndex: DefaultZIndexes.area
};
function PieImpl(props) {
	var id = props.id, propsWithoutId = _objectWithoutProperties$1(props, _excluded3);
	var hide = props.hide, className = props.className, rootTabIndex = props.rootTabIndex;
	var cells = (0, import_react.useMemo)(() => findAllByType(props.children, Cell), [props.children]);
	var sectors = useAppSelector((state) => selectPieSectors(state, id, cells));
	var previousSectorsRef = (0, import_react.useRef)(null);
	var layerClass = clsx("recharts-pie", className);
	if (hide || sectors == null) {
		previousSectorsRef.current = null;
		return /*#__PURE__*/ import_react.createElement(Layer, {
			tabIndex: rootTabIndex,
			className: layerClass
		});
	}
	return /*#__PURE__*/ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /*#__PURE__*/ import_react.createElement(SetPieTooltipEntrySettings, {
		dataKey: props.dataKey,
		nameKey: props.nameKey,
		sectors,
		stroke: props.stroke,
		strokeWidth: props.strokeWidth,
		fill: props.fill,
		name: props.name,
		hide: props.hide,
		tooltipType: props.tooltipType,
		formatter: props.formatter,
		id,
		activeShape: props.activeShape
	}), /*#__PURE__*/ import_react.createElement(Layer, {
		tabIndex: rootTabIndex,
		className: layerClass
	}, /*#__PURE__*/ import_react.createElement(SectorsWithAnimation, {
		props: _objectSpread$2(_objectSpread$2({}, propsWithoutId), {}, { sectors }),
		previousSectorsRef,
		id
	})));
}
/**
* @consumes PolarChartContext
* @provides LabelListContext
* @provides CellReader
*/
function PieFn(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultPieProps);
	var externalId = props.id, propsWithoutId = _objectWithoutProperties$1(props, _excluded4);
	var presentationProps = svgPropertiesNoEvents(propsWithoutId);
	return /*#__PURE__*/ import_react.createElement(RegisterGraphicalItemId, {
		id: externalId,
		type: "pie"
	}, (id) => /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement(SetPolarGraphicalItem, {
		type: "pie",
		id,
		data: propsWithoutId.data,
		dataKey: propsWithoutId.dataKey,
		hide: propsWithoutId.hide,
		angleAxisId: 0,
		radiusAxisId: 0,
		name: propsWithoutId.name,
		nameKey: propsWithoutId.nameKey,
		tooltipType: propsWithoutId.tooltipType,
		legendType: propsWithoutId.legendType,
		fill: propsWithoutId.fill,
		cx: propsWithoutId.cx,
		cy: propsWithoutId.cy,
		startAngle: propsWithoutId.startAngle,
		endAngle: propsWithoutId.endAngle,
		paddingAngle: propsWithoutId.paddingAngle,
		minAngle: propsWithoutId.minAngle,
		innerRadius: propsWithoutId.innerRadius,
		outerRadius: propsWithoutId.outerRadius,
		cornerRadius: propsWithoutId.cornerRadius,
		presentationProps,
		maxRadius: props.maxRadius
	}), /*#__PURE__*/ import_react.createElement(SetPiePayloadLegend, _extends$1({}, propsWithoutId, { id })), /*#__PURE__*/ import_react.createElement(PieImpl, _extends$1({}, propsWithoutId, { id }))));
}
var Pie = PieFn;
Pie.displayName = "Pie";
//#endregion
//#region node_modules/recharts/es6/state/ReportPolarOptions.js
function ReportPolarOptions(props) {
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		dispatch(updatePolarOptions(props));
	}, [dispatch, props]);
	return null;
}
//#endregion
//#region node_modules/recharts/es6/chart/PolarChart.js
var _excluded = ["layout"];
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys$1(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$1(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r) {
			_defineProperty$1(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$1(e, r, t) {
	return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
	var i = _toPrimitive$1(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* These default props are the same for all PolarChart components.
*/
var defaultPolarChartProps = _objectSpread$1({
	accessibilityLayer: true,
	stackOffset: "none",
	barCategoryGap: "10%",
	barGap: 4,
	margin: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	},
	reverseStackOrder: false,
	syncMethod: "index",
	layout: "radial",
	responsive: false,
	cx: "50%",
	cy: "50%",
	innerRadius: 0,
	outerRadius: "80%"
}, initialEventSettingsState);
/**
* These props are required for the PolarChart to function correctly.
* Users usually would not need to specify these explicitly,
* because the convenience components like PieChart, RadarChart, etc.
* will provide these defaults.
* We can't have the defaults in this file because each of those convenience components
* have their own opinions about what they should be.
*/
/**
* These are one-time, immutable options that decide the chart's behavior.
* Users who wish to call CartesianChart may decide to pass these options explicitly,
* but usually we would expect that they use one of the convenience components like PieChart, RadarChart, etc.
*/
var PolarChart = /*#__PURE__*/ (0, import_react.forwardRef)(function PolarChart(props, ref) {
	var _polarChartProps$id;
	var polarChartProps = resolveDefaultProps(props.categoricalChartProps, defaultPolarChartProps);
	var layout = polarChartProps.layout, otherCategoricalProps = _objectWithoutProperties(polarChartProps, _excluded);
	var chartName = props.chartName;
	var options = {
		chartName,
		defaultTooltipEventType: props.defaultTooltipEventType,
		validateTooltipEventTypes: props.validateTooltipEventTypes,
		tooltipPayloadSearcher: props.tooltipPayloadSearcher,
		eventEmitter: void 0
	};
	return /*#__PURE__*/ import_react.createElement(RechartsStoreProvider, {
		preloadedState: { options },
		reduxStoreName: (_polarChartProps$id = polarChartProps.id) !== null && _polarChartProps$id !== void 0 ? _polarChartProps$id : chartName
	}, /*#__PURE__*/ import_react.createElement(ChartDataContextProvider, { chartData: polarChartProps.data }), /*#__PURE__*/ import_react.createElement(ReportMainChartProps, {
		layout,
		margin: polarChartProps.margin
	}), /*#__PURE__*/ import_react.createElement(ReportEventSettings, {
		throttleDelay: polarChartProps.throttleDelay,
		throttledEvents: polarChartProps.throttledEvents
	}), /*#__PURE__*/ import_react.createElement(ReportChartProps, {
		baseValue: void 0,
		accessibilityLayer: polarChartProps.accessibilityLayer,
		barCategoryGap: polarChartProps.barCategoryGap,
		maxBarSize: polarChartProps.maxBarSize,
		stackOffset: polarChartProps.stackOffset,
		barGap: polarChartProps.barGap,
		barSize: polarChartProps.barSize,
		syncId: polarChartProps.syncId,
		syncMethod: polarChartProps.syncMethod,
		className: polarChartProps.className,
		reverseStackOrder: polarChartProps.reverseStackOrder
	}), /*#__PURE__*/ import_react.createElement(ReportPolarOptions, {
		cx: polarChartProps.cx,
		cy: polarChartProps.cy,
		startAngle: polarChartProps.startAngle,
		endAngle: polarChartProps.endAngle,
		innerRadius: polarChartProps.innerRadius,
		outerRadius: polarChartProps.outerRadius
	}), /*#__PURE__*/ import_react.createElement(CategoricalChart, _extends({}, otherCategoricalProps, { ref })));
});
//#endregion
//#region node_modules/recharts/es6/chart/PieChart.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var allowedTooltipTypes = ["item"];
var defaultPieChartProps = _objectSpread(_objectSpread({}, defaultPolarChartProps), {}, {
	layout: "centric",
	startAngle: 0,
	endAngle: 360
});
/**
* @consumes ResponsiveContainerContext
* @provides PolarViewBoxContext
* @provides PolarChartContext
*/
var PieChart = /*#__PURE__*/ (0, import_react.forwardRef)((props, ref) => {
	var propsWithDefaults = resolveDefaultProps(props, defaultPieChartProps);
	return /*#__PURE__*/ import_react.createElement(PolarChart, {
		chartName: "PieChart",
		defaultTooltipEventType: "item",
		validateTooltipEventTypes: allowedTooltipTypes,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: propsWithDefaults,
		ref
	});
});
//#endregion
//#region src/admin/pages/AdminDashboard.tsx
var import_jsx_runtime = require_jsx_runtime();
var fallbackKpis = [
	{
		label: "Gross Sales",
		value: "$284,819",
		change: "+18.4%",
		up: true,
		sub: "vs last 30 days",
		color: "#E8450A"
	},
	{
		label: "Net Revenue",
		value: "$241,284",
		change: "+12.1%",
		up: true,
		sub: "after commissions",
		color: "#059669"
	},
	{
		label: "Total Orders",
		value: "8,429",
		change: "+22.8%",
		up: true,
		sub: "284 today",
		color: "#6366F1"
	},
	{
		label: "New Customers",
		value: "1,842",
		change: "+9.4%",
		up: true,
		sub: "48 today",
		color: "#F59E0B"
	},
	{
		label: "Active Vendors",
		value: "142",
		change: "+4.2%",
		up: true,
		sub: "3 pending review",
		color: "#EC4899"
	},
	{
		label: "Products Listed",
		value: "28,490",
		change: "+6.8%",
		up: true,
		sub: "184 new this week",
		color: "#14B8A6"
	},
	{
		label: "Avg Order Value",
		value: "$147.20",
		change: "-2.1%",
		up: false,
		sub: "vs $150.42 last month",
		color: "#8B5CF6"
	},
	{
		label: "Conversion Rate",
		value: "3.42%",
		change: "+0.18%",
		up: true,
		sub: "from 3.24% last month",
		color: "#E8450A"
	}
];
var STATUS_COLORS = {
	delivered: "bg-[#D1FAE5] text-[#065F46]",
	shipped: "bg-[#DBEAFE] text-[#1E40AF]",
	processing: "bg-[#FEF3C7] text-[#92400E]",
	pending: "bg-[#F4F4F8] text-[#5B5B72]",
	cancelled: "bg-[#FEE2E2] text-[#991B1B]",
	refund_pending: "bg-[#FEF3C7] text-[#92400E]"
};
var DATE_FILTERS = [
	"Today",
	"7 Days",
	"30 Days",
	"90 Days",
	"This Year",
	"Custom"
];
var CHART_COLORS = [
	"#E8450A",
	"#6366F1",
	"#059669",
	"#F59E0B",
	"#EC4899",
	"#14B8A6"
];
function buildKpis(summary) {
	return [
		{
			label: "Gross Sales",
			value: `$${summary.grossSales.toLocaleString()}`,
			change: "+0.0%",
			up: true,
			sub: "live from backend",
			color: "#E8450A"
		},
		{
			label: "Net Revenue",
			value: `$${summary.netSales.toLocaleString()}`,
			change: "+0.0%",
			up: true,
			sub: "live from backend",
			color: "#059669"
		},
		{
			label: "Total Orders",
			value: summary.orders.toLocaleString(),
			change: "+0.0%",
			up: true,
			sub: "live from backend",
			color: "#6366F1"
		},
		{
			label: "New Customers",
			value: summary.customers.toLocaleString(),
			change: "+0.0%",
			up: true,
			sub: "live from backend",
			color: "#F59E0B"
		},
		{
			label: "Active Vendors",
			value: summary.vendors.toLocaleString(),
			change: "+0.0%",
			up: true,
			sub: "live from backend",
			color: "#EC4899"
		},
		{
			label: "Products Listed",
			value: summary.products.toLocaleString(),
			change: "+0.0%",
			up: true,
			sub: "live from backend",
			color: "#14B8A6"
		},
		{
			label: "Avg Order Value",
			value: `$${summary.averageOrderValue.toFixed(2)}`,
			change: "+0.0%",
			up: true,
			sub: "live from backend",
			color: "#8B5CF6"
		},
		{
			label: "Conversion Rate",
			value: `${summary.conversionRate.toFixed(2)}%`,
			change: "+0.0%",
			up: true,
			sub: "live from backend",
			color: "#E8450A"
		}
	];
}
function AdminDashboard({ onNavigate }) {
	const session = useSession();
	const [dateFilter, setDateFilter] = (0, import_react.useState)("30 Days");
	const [chartTab, setChartTab] = (0, import_react.useState)("revenue");
	const [liveData, setLiveData] = (0, import_react.useState)(null);
	const [liveError, setLiveError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (session.status !== "authenticated" || !session.token) {
			setLiveData(null);
			setLiveError(null);
			return;
		}
		let cancelled = false;
		(async () => {
			const response = await getAdminDashboardSummary(session.token);
			if (cancelled) return;
			if (!response.success) {
				setLiveError(response.error.message);
				setLiveData(null);
				return;
			}
			setLiveError(null);
			setLiveData(response.data);
		})();
		return () => {
			cancelled = true;
		};
	}, [session.status, session.token]);
	const dashboard = liveData;
	const displayKpis = dashboard ? buildKpis(dashboard.summary) : fallbackKpis;
	const displayAlerts = dashboard?.alerts ?? alerts;
	const displaySales = dashboard?.sales ?? salesData;
	const displayCategoryRevenue = dashboard?.categoryRevenue ?? categoryRevenue;
	const displayOrders = dashboard?.recentOrders ?? adminOrders;
	const displayPendingVendors = dashboard?.pendingVendors ?? adminVendors.filter((v) => v.status === "pending" || v.status === "review");
	const displayLowStockProducts = dashboard?.lowStockProducts ?? [
		{
			id: "sny-wh5",
			title: "Sony WH-1000XM5",
			stock: 3,
			vendorId: "v1"
		},
		{
			id: "tod-ha2b5",
			title: "The Ordinary HA 2%",
			stock: 9,
			vendorId: "v5"
		},
		{
			id: "apl-mba-m3",
			title: "MacBook Air M3",
			stock: 32,
			vendorId: "v3"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-[#111118]",
					children: "Dashboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#6B6B82] mt-0.5",
					children: session.user ? `Welcome back, ${session.user.fullName}. Here is what is happening.` : "Welcome back. Here's what's happening."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: DATE_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setDateFilter(f),
						className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${dateFilter === f ? "bg-[#E8450A] text-white" : "bg-white border border-[#E2E2EC] text-[#6B6B82] hover:border-[#111118]"}`,
						children: f
					}, f))
				})]
			}),
			displayAlerts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 px-5 py-3 border-b border-[#F4F4F8]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111118]",
							children: "Action Required"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs bg-[#FEE2E2] text-[#991B1B] px-2 py-0.5 rounded-full font-bold",
							children: displayAlerts.length
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex overflow-x-auto scroll-container",
					children: displayAlerts.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex-shrink-0 flex items-start gap-3 px-5 py-3 border-r border-[#F4F4F8] min-w-[260px] ${i === 0 ? "" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${a.type === "error" ? "bg-[#E11D48]" : a.type === "warning" ? "bg-[#D97706]" : "bg-[#3B82F6]"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-[#111118]",
								children: a.message
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-xs text-[#E8450A] font-semibold mt-0.5 hover:text-[#C93A07]",
								children: a.action
							})]
						})]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: displayKpis.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5 hover:shadow-md transition-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
								children: k.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `text-xs font-bold px-2 py-0.5 rounded-full ${k.up ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#FEE2E2] text-[#991B1B]"}`,
								children: [
									k.up ? "↑" : "↓",
									" ",
									k.change
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono font-black text-2xl text-[#111118] mt-2 tracking-tight",
							children: k.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mt-1",
							children: k.sub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 h-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "100%",
								height: "32",
								viewBox: "0 0 100 32",
								preserveAspectRatio: "none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
									points: "0,28 10,22 20,24 30,18 40,20 50,14 60,16 70,10 80,12 90,8 100,6",
									fill: "none",
									stroke: k.color,
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
									points: "0,32 0,28 10,22 20,24 30,18 40,20 50,14 60,16 70,10 80,12 90,8 100,6 100,32",
									fill: k.color,
									fillOpacity: "0.08"
								})]
							})
						})
					]
				}, k.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 bg-white rounded-xl border border-[#E2E2EC] p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Sales Overview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mt-0.5",
							children: "12-week trend"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex rounded-lg border border-[#E2E2EC] overflow-hidden",
							children: ["revenue", "orders"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setChartTab(t),
								className: `px-4 py-1.5 text-xs font-semibold capitalize transition-colors ${chartTab === t ? "bg-[#0F0F18] text-white" : "text-[#6B6B82] hover:bg-[#F4F4F8]"}`,
								children: t
							}, t))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: 220,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: displaySales,
							margin: {
								top: 5,
								right: 10,
								bottom: 0,
								left: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "areaGradient",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "#E8450A",
										stopOpacity: .18
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "#E8450A",
										stopOpacity: 0
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "#F4F4F8",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "date",
									tick: {
										fontSize: 11,
										fill: "#9B9BB8"
									},
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tick: {
										fontSize: 11,
										fill: "#9B9BB8"
									},
									axisLine: false,
									tickLine: false,
									tickFormatter: (v) => chartTab === "revenue" ? `$${(v / 1e3).toFixed(0)}k` : String(v)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: {
										background: "#fff",
										border: "1px solid #E2E2EC",
										borderRadius: "10px",
										fontSize: 12
									},
									labelStyle: {
										color: "#111118",
										fontWeight: 600
									},
									formatter: (v) => {
										const n = Number(v);
										return chartTab === "revenue" ? [`$${n.toLocaleString()}`, "Revenue"] : [n.toLocaleString(), "Orders"];
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: chartTab === "revenue" ? "revenue" : "orders",
									stroke: "#E8450A",
									strokeWidth: 2.5,
									fill: "url(#areaGradient)",
									dot: false,
									activeDot: {
										r: 5,
										fill: "#E8450A",
										strokeWidth: 0
									}
								})
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-xl border border-[#E2E2EC] p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118] mb-1",
							children: "Revenue by Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#9B9BB8] mb-4",
							children: "Last 30 days"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: displayCategoryRevenue,
								dataKey: "value",
								nameKey: "name",
								cx: "50%",
								cy: "50%",
								outerRadius: 70,
								innerRadius: 40,
								children: displayCategoryRevenue.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: CHART_COLORS[i % CHART_COLORS.length] }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								contentStyle: {
									background: "#fff",
									border: "1px solid #E2E2EC",
									borderRadius: "8px",
									fontSize: 12
								},
								formatter: (v) => [`$${(Number(v) / 1e3).toFixed(0)}k`, ""]
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2 mt-2",
							children: displayCategoryRevenue.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-2.5 h-2.5 rounded-full flex-shrink-0",
										style: { background: CHART_COLORS[i % CHART_COLORS.length] }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-[#6B6B82]",
										children: c.name
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-mono font-semibold text-[#111118]",
									children: [
										"$",
										(c.value / 1e3).toFixed(0),
										"k"
									]
								})]
							}, c.name))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-5 py-4 border-b border-[#F4F4F8]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[#111118]",
							children: "Recent Orders"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onNavigate("orders"),
							className: "text-xs font-semibold text-[#E8450A] hover:text-[#C93A07]",
							children: "View all →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "bg-[#F9F9FC]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
										children: "Order"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-4 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
										children: "Customer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-4 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
										children: "Amount"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-4 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide",
										children: "Status"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-[#F4F4F8]",
								children: displayOrders.slice(0, 6).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-[#F9F9FC] transition-colors cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-5 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-xs font-semibold text-[#111118]",
												children: o.id
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-[#9B9BB8] mt-0.5",
												children: o.date
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-4 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium text-xs text-[#111118]",
												children: o.customer
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-[#9B9BB8]",
												children: o.vendor
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono font-bold text-sm text-[#111118]",
												children: ["$", o.amount.toLocaleString()]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_COLORS[o.status]}`,
												children: o.status.replace("_", " ")
											})
										})
									]
								}, o.id))
							})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between px-4 py-3 border-b border-[#F4F4F8]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-sm text-[#111118]",
									children: "Pending Vendors"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onNavigate("vendors-applications"),
									className: "text-xs font-semibold text-[#E8450A]",
									children: "Review →"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y divide-[#F4F4F8]",
								children: displayPendingVendors.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-4 py-3 flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111118] truncate",
											children: v.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#9B9BB8]",
											children: [
												v.owner,
												" · ",
												v.joined
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "w-7 h-7 rounded-lg bg-[#D1FAE5] text-[#059669] flex items-center justify-center hover:bg-[#A7F3D0] transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-3.5 h-3.5",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 2.5,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M5 13l4 4L19 7"
												})
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "w-7 h-7 rounded-lg bg-[#FEE2E2] text-[#E11D48] flex items-center justify-center hover:bg-[#FECACA] transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-3.5 h-3.5",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 2.5,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M6 18L18 6M6 6l12 12"
												})
											})
										})]
									})]
								}, v.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-xl border border-[#E2E2EC] overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between px-4 py-3 border-b border-[#F4F4F8]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold text-sm text-[#111118]",
										children: "Low Stock"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs bg-[#FEF3C7] text-[#92400E] px-1.5 py-0.5 rounded-full font-bold",
										children: "5"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onNavigate("inventory"),
									className: "text-xs font-semibold text-[#E8450A]",
									children: "Manage →"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y divide-[#F4F4F8]",
								children: displayLowStockProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-4 py-3 flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-[#111118] truncate",
											children: p.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#9B9BB8] font-mono",
											children: p.vendorId
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-mono font-bold text-sm px-2 py-0.5 rounded-lg ${p.stock < 10 ? "bg-[#FEE2E2] text-[#E11D48]" : "bg-[#FEF3C7] text-[#D97706]"}`,
										children: p.stock
									})]
								}, p.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#0F0F18] rounded-xl p-4 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-[#5B5B72] uppercase tracking-widest",
									children: "Pending Payouts"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono font-black text-3xl text-white",
									children: "$241,800"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#5B5B72]",
									children: dashboard ? `across ${displayPendingVendors.length} vendors · Live from backend` : "across 28 vendors · Next batch Jul 28"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onNavigate("finance"),
									className: "w-full py-2 bg-[#E8450A] text-white rounded-lg text-xs font-semibold hover:bg-[#C93A07] transition-colors",
									children: "Process Payouts"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-xl border border-[#E2E2EC] p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-between mb-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-[#111118]",
						children: "Orders by Volume"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#9B9BB8] mt-0.5",
						children: "Weekly order count breakdown"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: 180,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: displaySales.slice(-8),
						margin: {
							top: 0,
							right: 10,
							bottom: 0,
							left: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "#F4F4F8",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "date",
								tick: {
									fontSize: 11,
									fill: "#9B9BB8"
								},
								axisLine: false,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tick: {
									fontSize: 11,
									fill: "#9B9BB8"
								},
								axisLine: false,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								contentStyle: {
									background: "#fff",
									border: "1px solid #E2E2EC",
									borderRadius: "10px",
									fontSize: 12
								},
								cursor: { fill: "#F4F4F8" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "orders",
								fill: "#E8450A",
								radius: [
									4,
									4,
									0,
									0
								]
							})
						]
					})
				})]
			})
		]
	});
}
//#endregion
export { AdminDashboard as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5EYXNoYm9hcmQtRDQ2WVBlcDUuanMiLCJuYW1lcyI6WyJvd25LZXlzIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX2V4Y2x1ZGVkIiwiX2V4dGVuZHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsIm93bktleXMiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJ1c2VNZW1vIiwidXNlUmVmIiwib3duS2V5cyIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSJdLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9yZWNoYXJ0cy9lczYvc3RhdGUvc2VsZWN0b3JzL3BvbGFyU2VsZWN0b3JzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlY2hhcnRzL2VzNi9zdGF0ZS9zZWxlY3RvcnMvcGllU2VsZWN0b3JzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlY2hhcnRzL2VzNi9wb2xhci9QaWUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVjaGFydHMvZXM2L3N0YXRlL1JlcG9ydFBvbGFyT3B0aW9ucy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZWNoYXJ0cy9lczYvY2hhcnQvUG9sYXJDaGFydC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZWNoYXJ0cy9lczYvY2hhcnQvUGllQ2hhcnQuanMiLCIuLi8uLi9zcmMvYWRtaW4vcGFnZXMvQWRtaW5EYXNoYm9hcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgc2VsZWN0Q2hhcnREYXRhQW5kQWx3YXlzSWdub3JlSW5kZXhlcywgc2VsZWN0Q2hhcnREYXRhU2xpY2VJZ25vcmluZ0luZGV4ZXMgfSBmcm9tICcuL2RhdGFTZWxlY3RvcnMnO1xuaW1wb3J0IHsgY29tYmluZUFwcGxpZWRWYWx1ZXMsIGNvbWJpbmVBeGlzRG9tYWluLCBjb21iaW5lQXhpc0RvbWFpbldpdGhOaWNlVGlja3MsIGNvbWJpbmVEaXNwbGF5ZWREYXRhLCBjb21iaW5lRG9tYWluT2ZBbGxBcHBsaWVkTnVtZXJpY2FsVmFsdWVzSW5jbHVkaW5nRXJyb3JWYWx1ZXMsIGNvbWJpbmVHcmFwaGljYWxJdGVtc0RhdGEsIGNvbWJpbmVHcmFwaGljYWxJdGVtc1NldHRpbmdzLCBjb21iaW5lTmljZVRpY2tzLCBjb21iaW5lTnVtZXJpY2FsRG9tYWluLCBpdGVtQXhpc1ByZWRpY2F0ZSwgc2VsZWN0QWxsRXJyb3JCYXJTZXR0aW5ncywgc2VsZWN0QmFzZUF4aXMsIHNlbGVjdERvbWFpbkRlZmluaXRpb24sIHNlbGVjdERvbWFpbkZyb21Vc2VyUHJlZmVyZW5jZSwgc2VsZWN0UmVhbFNjYWxlVHlwZSwgc2VsZWN0UmVuZGVyYWJsZUF4aXNTZXR0aW5ncyB9IGZyb20gJy4vYXhpc1NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzZWxlY3RDaGFydExheW91dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvY2hhcnRMYXlvdXRDb250ZXh0JztcbmltcG9ydCB7IGdldFZhbHVlQnlEYXRhS2V5IH0gZnJvbSAnLi4vLi4vdXRpbC9DaGFydFV0aWxzJztcbmltcG9ydCB7IHBpY2tBeGlzVHlwZSB9IGZyb20gJy4vcGlja0F4aXNUeXBlJztcbmltcG9ydCB7IHBpY2tBeGlzSWQgfSBmcm9tICcuL3BpY2tBeGlzSWQnO1xuaW1wb3J0IHsgc2VsZWN0U3RhY2tPZmZzZXRUeXBlIH0gZnJvbSAnLi9yb290UHJvcHNTZWxlY3RvcnMnO1xuaW1wb3J0IHsgY29tYmluZUNoZWNrZWREb21haW4gfSBmcm9tICcuL2NvbWJpbmVycy9jb21iaW5lQ2hlY2tlZERvbWFpbic7XG5leHBvcnQgdmFyIHNlbGVjdFVuZmlsdGVyZWRQb2xhckl0ZW1zID0gc3RhdGUgPT4gc3RhdGUuZ3JhcGhpY2FsSXRlbXMucG9sYXJJdGVtcztcbnZhciBzZWxlY3RBeGlzUHJlZGljYXRlID0gY3JlYXRlU2VsZWN0b3IoW3BpY2tBeGlzVHlwZSwgcGlja0F4aXNJZF0sIGl0ZW1BeGlzUHJlZGljYXRlKTtcbmV4cG9ydCB2YXIgc2VsZWN0UG9sYXJJdGVtc1NldHRpbmdzID0gY3JlYXRlU2VsZWN0b3IoW3NlbGVjdFVuZmlsdGVyZWRQb2xhckl0ZW1zLCBzZWxlY3RCYXNlQXhpcywgc2VsZWN0QXhpc1ByZWRpY2F0ZV0sIGNvbWJpbmVHcmFwaGljYWxJdGVtc1NldHRpbmdzKTtcbnZhciBzZWxlY3RQb2xhckdyYXBoaWNhbEl0ZW1zRGF0YSA9IGNyZWF0ZVNlbGVjdG9yKFtzZWxlY3RQb2xhckl0ZW1zU2V0dGluZ3NdLCBjb21iaW5lR3JhcGhpY2FsSXRlbXNEYXRhKTtcbmV4cG9ydCB2YXIgc2VsZWN0UG9sYXJEaXNwbGF5ZWREYXRhID0gY3JlYXRlU2VsZWN0b3IoW3NlbGVjdFBvbGFyR3JhcGhpY2FsSXRlbXNEYXRhLCBzZWxlY3RDaGFydERhdGFBbmRBbHdheXNJZ25vcmVJbmRleGVzXSwgY29tYmluZURpc3BsYXllZERhdGEpO1xuZXhwb3J0IHZhciBzZWxlY3RQb2xhckFwcGxpZWRWYWx1ZXMgPSBjcmVhdGVTZWxlY3Rvcihbc2VsZWN0UG9sYXJEaXNwbGF5ZWREYXRhLCBzZWxlY3RCYXNlQXhpcywgc2VsZWN0UG9sYXJJdGVtc1NldHRpbmdzXSwgY29tYmluZUFwcGxpZWRWYWx1ZXMpO1xuZXhwb3J0IHZhciBzZWxlY3RBbGxQb2xhckFwcGxpZWROdW1lcmljYWxWYWx1ZXMgPSBjcmVhdGVTZWxlY3Rvcihbc2VsZWN0UG9sYXJEaXNwbGF5ZWREYXRhLCBzZWxlY3RCYXNlQXhpcywgc2VsZWN0UG9sYXJJdGVtc1NldHRpbmdzXSwgKGRhdGEsIGF4aXNTZXR0aW5ncywgaXRlbXMpID0+IHtcbiAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZGF0YS5mbGF0TWFwKGVudHJ5ID0+IHtcbiAgICAgIHJldHVybiBpdGVtcy5mbGF0TWFwKGl0ZW0gPT4ge1xuICAgICAgICB2YXIgX2F4aXNTZXR0aW5ncyRkYXRhS2V5O1xuICAgICAgICB2YXIgdmFsdWVCeURhdGFLZXkgPSBnZXRWYWx1ZUJ5RGF0YUtleShlbnRyeSwgKF9heGlzU2V0dGluZ3MkZGF0YUtleSA9IGF4aXNTZXR0aW5ncy5kYXRhS2V5KSAhPT0gbnVsbCAmJiBfYXhpc1NldHRpbmdzJGRhdGFLZXkgIT09IHZvaWQgMCA/IF9heGlzU2V0dGluZ3MkZGF0YUtleSA6IGl0ZW0uZGF0YUtleSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlQnlEYXRhS2V5LFxuICAgICAgICAgIGVycm9yRG9tYWluOiBbXSAvLyBwb2xhciBjaGFydHMgZG8gbm90IGhhdmUgZXJyb3IgYmFyc1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG4gIGlmICgoYXhpc1NldHRpbmdzID09PSBudWxsIHx8IGF4aXNTZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXhpc1NldHRpbmdzLmRhdGFLZXkpICE9IG51bGwpIHtcbiAgICByZXR1cm4gZGF0YS5tYXAoaXRlbSA9PiAoe1xuICAgICAgdmFsdWU6IGdldFZhbHVlQnlEYXRhS2V5KGl0ZW0sIGF4aXNTZXR0aW5ncy5kYXRhS2V5KSxcbiAgICAgIGVycm9yRG9tYWluOiBbXVxuICAgIH0pKTtcbiAgfVxuICByZXR1cm4gZGF0YS5tYXAoZW50cnkgPT4gKHtcbiAgICB2YWx1ZTogZW50cnksXG4gICAgZXJyb3JEb21haW46IFtdXG4gIH0pKTtcbn0pO1xudmFyIHVuc3VwcG9ydGVkSW5Qb2xhckNoYXJ0ID0gKCkgPT4gdW5kZWZpbmVkO1xudmFyIHNlbGVjdERvbWFpbk9mQWxsUG9sYXJBcHBsaWVkTnVtZXJpY2FsVmFsdWVzID0gY3JlYXRlU2VsZWN0b3IoW3NlbGVjdFBvbGFyRGlzcGxheWVkRGF0YSwgc2VsZWN0QmFzZUF4aXMsIHNlbGVjdFBvbGFySXRlbXNTZXR0aW5ncywgc2VsZWN0QWxsRXJyb3JCYXJTZXR0aW5ncywgcGlja0F4aXNUeXBlLCBzZWxlY3RDaGFydERhdGFTbGljZUlnbm9yaW5nSW5kZXhlc10sIGNvbWJpbmVEb21haW5PZkFsbEFwcGxpZWROdW1lcmljYWxWYWx1ZXNJbmNsdWRpbmdFcnJvclZhbHVlcyk7XG52YXIgc2VsZWN0UG9sYXJOdW1lcmljYWxEb21haW4gPSBjcmVhdGVTZWxlY3Rvcihbc2VsZWN0QmFzZUF4aXMsIHNlbGVjdERvbWFpbkRlZmluaXRpb24sIHNlbGVjdERvbWFpbkZyb21Vc2VyUHJlZmVyZW5jZSwgdW5zdXBwb3J0ZWRJblBvbGFyQ2hhcnQsIHNlbGVjdERvbWFpbk9mQWxsUG9sYXJBcHBsaWVkTnVtZXJpY2FsVmFsdWVzLCB1bnN1cHBvcnRlZEluUG9sYXJDaGFydCwgc2VsZWN0Q2hhcnRMYXlvdXQsIHBpY2tBeGlzVHlwZV0sIGNvbWJpbmVOdW1lcmljYWxEb21haW4pO1xuZXhwb3J0IHZhciBzZWxlY3RQb2xhckF4aXNEb21haW4gPSBjcmVhdGVTZWxlY3Rvcihbc2VsZWN0QmFzZUF4aXMsIHNlbGVjdENoYXJ0TGF5b3V0LCBzZWxlY3RQb2xhckRpc3BsYXllZERhdGEsIHNlbGVjdFBvbGFyQXBwbGllZFZhbHVlcywgc2VsZWN0U3RhY2tPZmZzZXRUeXBlLCBwaWNrQXhpc1R5cGUsIHNlbGVjdFBvbGFyTnVtZXJpY2FsRG9tYWluXSwgY29tYmluZUF4aXNEb21haW4pO1xuZXhwb3J0IHZhciBzZWxlY3RQb2xhck5pY2VUaWNrcyA9IGNyZWF0ZVNlbGVjdG9yKFtzZWxlY3RQb2xhckF4aXNEb21haW4sIHNlbGVjdFJlbmRlcmFibGVBeGlzU2V0dGluZ3MsIHNlbGVjdFJlYWxTY2FsZVR5cGVdLCBjb21iaW5lTmljZVRpY2tzKTtcbmV4cG9ydCB2YXIgc2VsZWN0UG9sYXJBeGlzRG9tYWluSW5jbHVkaW5nTmljZVRpY2tzID0gY3JlYXRlU2VsZWN0b3IoW3NlbGVjdEJhc2VBeGlzLCBzZWxlY3RQb2xhckF4aXNEb21haW4sIHNlbGVjdFBvbGFyTmljZVRpY2tzLCBwaWNrQXhpc1R5cGVdLCBjb21iaW5lQXhpc0RvbWFpbldpdGhOaWNlVGlja3MpO1xuZXhwb3J0IHZhciBzZWxlY3RQb2xhckF4aXNDaGVja2VkRG9tYWluID0gY3JlYXRlU2VsZWN0b3IoW3NlbGVjdFJlYWxTY2FsZVR5cGUsIHNlbGVjdFBvbGFyQXhpc0RvbWFpbkluY2x1ZGluZ05pY2VUaWNrc10sIGNvbWJpbmVDaGVja2VkRG9tYWluKTsiLCJmdW5jdGlvbiBvd25LZXlzKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSkgeyBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgeyB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307IHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7IHJldHVybiAociA9IF90b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHsgdmFsdWU6IHQsIGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAgfSkgOiBlW3JdID0gdCwgZTsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gdHlwZW9mIGkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiB0IHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgY29tcHV0ZVBpZVNlY3RvcnMgfSBmcm9tICcuLi8uLi9wb2xhci9QaWUnO1xuaW1wb3J0IHsgc2VsZWN0Q2hhcnREYXRhQW5kQWx3YXlzSWdub3JlSW5kZXhlcyB9IGZyb20gJy4vZGF0YVNlbGVjdG9ycyc7XG5pbXBvcnQgeyBzZWxlY3RDaGFydE9mZnNldEludGVybmFsIH0gZnJvbSAnLi9zZWxlY3RDaGFydE9mZnNldEludGVybmFsJztcbmltcG9ydCB7IGdldFRvb2x0aXBOYW1lUHJvcCwgZ2V0VmFsdWVCeURhdGFLZXkgfSBmcm9tICcuLi8uLi91dGlsL0NoYXJ0VXRpbHMnO1xuaW1wb3J0IHsgc2VsZWN0VW5maWx0ZXJlZFBvbGFySXRlbXMgfSBmcm9tICcuL3BvbGFyU2VsZWN0b3JzJztcbnZhciBwaWNrSWQgPSAoX3N0YXRlLCBpZCkgPT4gaWQ7XG52YXIgc2VsZWN0U3luY2hyb25pc2VkUGllU2V0dGluZ3MgPSBjcmVhdGVTZWxlY3Rvcihbc2VsZWN0VW5maWx0ZXJlZFBvbGFySXRlbXMsIHBpY2tJZF0sIChncmFwaGljYWxJdGVtcywgaWQpID0+IGdyYXBoaWNhbEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ3BpZScpLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpZCkpO1xuXG4vLyBLZWVwIHN0YWJsZSByZWZlcmVuY2UgdG8gYW4gZW1wdHkgYXJyYXkgdG8gcHJldmVudCByZS1yZW5kZXJzXG52YXIgZW1wdHlBcnJheSA9IFtdO1xudmFyIHBpY2tDZWxscyA9IChfc3RhdGUsIF9pZCwgY2VsbHMpID0+IHtcbiAgaWYgKChjZWxscyA9PT0gbnVsbCB8fCBjZWxscyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2VsbHMubGVuZ3RoKSA9PT0gMCkge1xuICAgIHJldHVybiBlbXB0eUFycmF5O1xuICB9XG4gIHJldHVybiBjZWxscztcbn07XG5leHBvcnQgdmFyIHNlbGVjdERpc3BsYXllZERhdGEgPSBjcmVhdGVTZWxlY3Rvcihbc2VsZWN0Q2hhcnREYXRhQW5kQWx3YXlzSWdub3JlSW5kZXhlcywgc2VsZWN0U3luY2hyb25pc2VkUGllU2V0dGluZ3MsIHBpY2tDZWxsc10sIChfcmVmLCBwaWVTZXR0aW5ncywgY2VsbHMpID0+IHtcbiAgdmFyIGNoYXJ0RGF0YSA9IF9yZWYuY2hhcnREYXRhO1xuICBpZiAocGllU2V0dGluZ3MgPT0gbnVsbCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgdmFyIGRpc3BsYXllZERhdGE7XG4gIGlmICgocGllU2V0dGluZ3MgPT09IG51bGwgfHwgcGllU2V0dGluZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBpZVNldHRpbmdzLmRhdGEpICE9IG51bGwgJiYgcGllU2V0dGluZ3MuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGxheWVkRGF0YSA9IHBpZVNldHRpbmdzLmRhdGE7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheWVkRGF0YSA9IGNoYXJ0RGF0YTtcbiAgfVxuICBpZiAoKCFkaXNwbGF5ZWREYXRhIHx8ICFkaXNwbGF5ZWREYXRhLmxlbmd0aCkgJiYgY2VsbHMgIT0gbnVsbCkge1xuICAgIGRpc3BsYXllZERhdGEgPSBjZWxscy5tYXAoY2VsbCA9PiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHBpZVNldHRpbmdzLnByZXNlbnRhdGlvblByb3BzKSwgY2VsbC5wcm9wcykpO1xuICB9XG4gIGlmIChkaXNwbGF5ZWREYXRhID09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBkaXNwbGF5ZWREYXRhO1xufSk7XG5leHBvcnQgdmFyIHNlbGVjdFBpZUxlZ2VuZCA9IGNyZWF0ZVNlbGVjdG9yKFtzZWxlY3REaXNwbGF5ZWREYXRhLCBzZWxlY3RTeW5jaHJvbmlzZWRQaWVTZXR0aW5ncywgcGlja0NlbGxzXSwgKGRpc3BsYXllZERhdGEsIHBpZVNldHRpbmdzLCBjZWxscykgPT4ge1xuICBpZiAoZGlzcGxheWVkRGF0YSA9PSBudWxsIHx8IHBpZVNldHRpbmdzID09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBkaXNwbGF5ZWREYXRhLm1hcCgoZW50cnksIGkpID0+IHtcbiAgICB2YXIgX2NlbGxzJGk7XG4gICAgdmFyIG5hbWUgPSBnZXRWYWx1ZUJ5RGF0YUtleShlbnRyeSwgcGllU2V0dGluZ3MubmFtZUtleSwgcGllU2V0dGluZ3MubmFtZSk7XG4gICAgdmFyIGNvbG9yO1xuICAgIGlmIChjZWxscyAhPT0gbnVsbCAmJiBjZWxscyAhPT0gdm9pZCAwICYmIChfY2VsbHMkaSA9IGNlbGxzW2ldKSAhPT0gbnVsbCAmJiBfY2VsbHMkaSAhPT0gdm9pZCAwICYmIChfY2VsbHMkaSA9IF9jZWxscyRpLnByb3BzKSAhPT0gbnVsbCAmJiBfY2VsbHMkaSAhPT0gdm9pZCAwICYmIF9jZWxscyRpLmZpbGwpIHtcbiAgICAgIGNvbG9yID0gY2VsbHNbaV0ucHJvcHMuZmlsbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiYgZW50cnkgIT0gbnVsbCAmJiAnZmlsbCcgaW4gZW50cnkpIHtcbiAgICAgIGNvbG9yID0gZW50cnkuZmlsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3IgPSBwaWVTZXR0aW5ncy5maWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdldFRvb2x0aXBOYW1lUHJvcChuYW1lLCBwaWVTZXR0aW5ncy5kYXRhS2V5KSxcbiAgICAgIGRhdGFLZXk6IHBpZVNldHRpbmdzLmRhdGFLZXksXG4gICAgICBjb2xvcixcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgTGVnZW5kIHBheWxvYWQucGF5bG9hZCBzYXlzIGl0IHdhbnRzIG9iamVjdHMgYnV0IG91ciBkYXRhIGNhbiBiZSB1bmtub3duXG4gICAgICBwYXlsb2FkOiBlbnRyeSxcbiAgICAgIHR5cGU6IHBpZVNldHRpbmdzLmxlZ2VuZFR5cGVcbiAgICB9O1xuICB9KTtcbn0pO1xuZXhwb3J0IHZhciBzZWxlY3RQaWVTZWN0b3JzID0gY3JlYXRlU2VsZWN0b3IoW3NlbGVjdERpc3BsYXllZERhdGEsIHNlbGVjdFN5bmNocm9uaXNlZFBpZVNldHRpbmdzLCBwaWNrQ2VsbHMsIHNlbGVjdENoYXJ0T2Zmc2V0SW50ZXJuYWxdLCAoZGlzcGxheWVkRGF0YSwgcGllU2V0dGluZ3MsIGNlbGxzLCBvZmZzZXQpID0+IHtcbiAgaWYgKHBpZVNldHRpbmdzID09IG51bGwgfHwgZGlzcGxheWVkRGF0YSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gY29tcHV0ZVBpZVNlY3RvcnMoe1xuICAgIG9mZnNldCxcbiAgICBwaWVTZXR0aW5ncyxcbiAgICBkaXNwbGF5ZWREYXRhLFxuICAgIGNlbGxzXG4gIH0pO1xufSk7IiwidmFyIF9leGNsdWRlZCA9IFtcImtleVwiXSxcbiAgX2V4Y2x1ZGVkMiA9IFtcIm9uTW91c2VFbnRlclwiLCBcIm9uQ2xpY2tcIiwgXCJvbk1vdXNlTGVhdmVcIl0sXG4gIF9leGNsdWRlZDMgPSBbXCJpZFwiXSxcbiAgX2V4Y2x1ZGVkNCA9IFtcImlkXCJdO1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IHJldHVybiBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uIChuKSB7IGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB7IHZhciB0ID0gYXJndW1lbnRzW2VdOyBmb3IgKHZhciByIGluIHQpICh7fSkuaGFzT3duUHJvcGVydHkuY2FsbCh0LCByKSAmJiAobltyXSA9IHRbcl0pOyB9IHJldHVybiBuOyB9LCBfZXh0ZW5kcy5hcHBseShudWxsLCBhcmd1bWVudHMpOyB9XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoZSwgdCkgeyBpZiAobnVsbCA9PSBlKSByZXR1cm4ge307IHZhciBvLCByLCBpID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoZSwgdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBuID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgZm9yIChyID0gMDsgciA8IG4ubGVuZ3RoOyByKyspIG8gPSBuW3JdLCAtMSA9PT0gdC5pbmRleE9mKG8pICYmIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSwgbykgJiYgKGlbb10gPSBlW29dKTsgfSByZXR1cm4gaTsgfVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UociwgZSkgeyBpZiAobnVsbCA9PSByKSByZXR1cm4ge307IHZhciB0ID0ge307IGZvciAodmFyIG4gaW4gcikgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwociwgbikpIHsgaWYgKC0xICE9PSBlLmluZGV4T2YobikpIGNvbnRpbnVlOyB0W25dID0gcltuXTsgfSByZXR1cm4gdDsgfVxuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkgeyByZXR1cm4gKHIgPSBfdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7IHZhbHVlOiB0LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwIH0pIDogZVtyXSA9IHQsIGU7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgaSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2V0IGZyb20gJ2VzLXRvb2xraXQvY29tcGF0L2dldCc7XG5pbXBvcnQgeyBjbHN4IH0gZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBzZWxlY3RQaWVMZWdlbmQsIHNlbGVjdFBpZVNlY3RvcnMgfSBmcm9tICcuLi9zdGF0ZS9zZWxlY3RvcnMvcGllU2VsZWN0b3JzJztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vc3RhdGUvaG9va3MnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi9jb250YWluZXIvTGF5ZXInO1xuaW1wb3J0IHsgQ3VydmUgfSBmcm9tICcuLi9zaGFwZS9DdXJ2ZSc7XG5pbXBvcnQgeyBTZWN0b3IgfSBmcm9tICcuLi9zaGFwZS9TZWN0b3InO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudC9UZXh0JztcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi9jb21wb25lbnQvQ2VsbCc7XG5pbXBvcnQgeyBmaW5kQWxsQnlUeXBlIH0gZnJvbSAnLi4vdXRpbC9SZWFjdFV0aWxzJztcbmltcG9ydCB7IGdldE1heFJhZGl1cywgcG9sYXJUb0NhcnRlc2lhbiB9IGZyb20gJy4uL3V0aWwvUG9sYXJVdGlscyc7XG5pbXBvcnQgeyBnZXRQZXJjZW50VmFsdWUsIGludGVycG9sYXRlLCBpc051bWJlciwgbWF0aFNpZ24gfSBmcm9tICcuLi91dGlsL0RhdGFVdGlscyc7XG5pbXBvcnQgeyBnZXRUb29sdGlwTmFtZVByb3AsIGdldFZhbHVlQnlEYXRhS2V5IH0gZnJvbSAnLi4vdXRpbC9DaGFydFV0aWxzJztcbmltcG9ydCB7IGFkYXB0RXZlbnRzT2ZDaGlsZCB9IGZyb20gJy4uL3V0aWwvdHlwZXMnO1xuaW1wb3J0IHsgU2hhcGUgfSBmcm9tICcuLi91dGlsL0FjdGl2ZVNoYXBlVXRpbHMnO1xuaW1wb3J0IHsgdXNlTW91c2VDbGlja0l0ZW1EaXNwYXRjaCwgdXNlTW91c2VFbnRlckl0ZW1EaXNwYXRjaCwgdXNlTW91c2VMZWF2ZUl0ZW1EaXNwYXRjaCB9IGZyb20gJy4uL2NvbnRleHQvdG9vbHRpcENvbnRleHQnO1xuaW1wb3J0IHsgU2V0VG9vbHRpcEVudHJ5U2V0dGluZ3MgfSBmcm9tICcuLi9zdGF0ZS9TZXRUb29sdGlwRW50cnlTZXR0aW5ncyc7XG5pbXBvcnQgeyBzZWxlY3RBY3RpdmVUb29sdGlwRGF0YUtleSwgc2VsZWN0QWN0aXZlVG9vbHRpcEdyYXBoaWNhbEl0ZW1JZCwgc2VsZWN0QWN0aXZlVG9vbHRpcEluZGV4IH0gZnJvbSAnLi4vc3RhdGUvc2VsZWN0b3JzL3Rvb2x0aXBTZWxlY3RvcnMnO1xuaW1wb3J0IHsgU2V0UG9sYXJMZWdlbmRQYXlsb2FkIH0gZnJvbSAnLi4vc3RhdGUvU2V0TGVnZW5kUGF5bG9hZCc7XG5pbXBvcnQgeyBEQVRBX0lURU1fR1JBUEhJQ0FMX0lURU1fSURfQVRUUklCVVRFX05BTUUsIERBVEFfSVRFTV9JTkRFWF9BVFRSSUJVVEVfTkFNRSB9IGZyb20gJy4uL3V0aWwvQ29uc3RhbnRzJztcbmltcG9ydCB7IEFuaW1hdGVkSXRlbXMsIHVzZUFuaW1hdGlvbkNhbGxiYWNrcyB9IGZyb20gJy4uL2FuaW1hdGlvbi9BbmltYXRlZEl0ZW1zJztcbmltcG9ydCB7IG1hdGNoQXBwZW5kIH0gZnJvbSAnLi4vYW5pbWF0aW9uL21hdGNoQnknO1xuaW1wb3J0IHsgcmVzb2x2ZURlZmF1bHRQcm9wcyB9IGZyb20gJy4uL3V0aWwvcmVzb2x2ZURlZmF1bHRQcm9wcyc7XG5pbXBvcnQgeyBSZWdpc3RlckdyYXBoaWNhbEl0ZW1JZCB9IGZyb20gJy4uL2NvbnRleHQvUmVnaXN0ZXJHcmFwaGljYWxJdGVtSWQnO1xuaW1wb3J0IHsgU2V0UG9sYXJHcmFwaGljYWxJdGVtIH0gZnJvbSAnLi4vc3RhdGUvU2V0R3JhcGhpY2FsSXRlbSc7XG5pbXBvcnQgeyBzdmdQcm9wZXJ0aWVzTm9FdmVudHMsIHN2Z1Byb3BlcnRpZXNOb0V2ZW50c0Zyb21Vbmtub3duIH0gZnJvbSAnLi4vdXRpbC9zdmdQcm9wZXJ0aWVzTm9FdmVudHMnO1xuaW1wb3J0IHsgTGFiZWxMaXN0RnJvbUxhYmVsUHJvcCwgUG9sYXJMYWJlbExpc3RDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9jb21wb25lbnQvTGFiZWxMaXN0JztcbmltcG9ydCB7IFBvbGFyTGFiZWxDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9jb21wb25lbnQvTGFiZWwnO1xuaW1wb3J0IHsgWkluZGV4TGF5ZXIgfSBmcm9tICcuLi96SW5kZXgvWkluZGV4TGF5ZXInO1xuaW1wb3J0IHsgRGVmYXVsdFpJbmRleGVzIH0gZnJvbSAnLi4vekluZGV4L0RlZmF1bHRaSW5kZXhlcyc7XG5pbXBvcnQgeyBnZXRDbGFzc05hbWVGcm9tVW5rbm93biB9IGZyb20gJy4uL3V0aWwvZ2V0Q2xhc3NOYW1lRnJvbVVua25vd24nO1xuaW1wb3J0IHsgdXNlUG9sYXJDaGFydExheW91dCB9IGZyb20gJy4uL2NvbnRleHQvY2hhcnRMYXlvdXRDb250ZXh0JztcblxuLyoqXG4gKiBUaGUgYGxhYmVsYCBwcm9wIGluIFBpZSBhY2NlcHRzIGEgdmFyaWV0eSBvZiBhbHRlcm5hdGl2ZXMuXG4gKi9cblxuLyoqXG4gKiBXZSBzcHJlYWQgdGhlIGRhdGEgb2JqZWN0IGludG8gdGhlIHNlY3RvciBkYXRhIGl0ZW0sXG4gKiBzbyB3ZSBjYW4ndCByZWFsbHkga25vdyB3aGF0IGlzIGdvaW5nIHRvIGJlIGluc2lkZS5cbiAqXG4gKiBUaGlzIHR5cGUgcmVwcmVzZW50cyBvdXIgYmVzdCBlZmZvcnQsIGJ1dCBpdCBhbGwgZGVwZW5kcyBvbiB0aGUgaW5wdXQgZGF0YVxuICogYW5kIHdoYXQgaXMgaW5zaWRlIG9mIGl0LlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWNoYXJ0cy9yZWNoYXJ0cy9pc3N1ZXMvNjM4MFxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlY2hhcnRzL3JlY2hhcnRzL2Rpc2N1c3Npb25zLzYzNzVcbiAqL1xuXG4vKipcbiAqIEludGVybmFsIHByb3BzLCBjb21iaW5hdGlvbiBvZiBleHRlcm5hbCBwcm9wcyArIGRlZmF1bHRQcm9wcyArIHByaXZhdGUgUmVjaGFydHMgc3RhdGVcbiAqL1xuXG52YXIgZGVmYXVsdFBpZVNlY3RvclNoYXBlID0gU2VjdG9yO1xuZnVuY3Rpb24gU2V0UGllUGF5bG9hZExlZ2VuZChwcm9wcykge1xuICB2YXIgY2VsbHMgPSB1c2VNZW1vKCgpID0+IGZpbmRBbGxCeVR5cGUocHJvcHMuY2hpbGRyZW4sIENlbGwpLCBbcHJvcHMuY2hpbGRyZW5dKTtcbiAgdmFyIGxlZ2VuZFBheWxvYWQgPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBzZWxlY3RQaWVMZWdlbmQoc3RhdGUsIHByb3BzLmlkLCBjZWxscykpO1xuICBpZiAobGVnZW5kUGF5bG9hZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNldFBvbGFyTGVnZW5kUGF5bG9hZCwge1xuICAgIGxlZ2VuZFBheWxvYWQ6IGxlZ2VuZFBheWxvYWRcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRBY3RpdmVTaGFwZUZpbGwoYWN0aXZlU2hhcGUpIHtcbiAgLy8gYWN0aXZlU2hhcGUgY2FuIGJlIGJvb2xlYW4vZnVuY3Rpb24vZWxlbWVudC9vYmplY3Q7IG9ubHkgZWxlbWVudC9vYmplY3QgY2FuIGNhcnJ5IGEgc3RhdGljIGZpbGwgdmFsdWUuXG4gIGlmIChhY3RpdmVTaGFwZSA9PSBudWxsIHx8IHR5cGVvZiBhY3RpdmVTaGFwZSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBhY3RpdmVTaGFwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChhY3RpdmVTaGFwZSkpIHtcbiAgICB2YXIgX2FjdGl2ZVNoYXBlJHByb3BzO1xuICAgIC8vIFJlYWN0IGVsZW1lbnQgZm9ybTogPFNlY3RvciBmaWxsPVwiLi4uXCIvPiBvciBjdXN0b20gZWxlbWVudCB3aXRoIGZpbGwgcHJvcC5cbiAgICB2YXIgX2ZpbGwgPSAoX2FjdGl2ZVNoYXBlJHByb3BzID0gYWN0aXZlU2hhcGUucHJvcHMpID09PSBudWxsIHx8IF9hY3RpdmVTaGFwZSRwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FjdGl2ZVNoYXBlJHByb3BzLmZpbGw7XG4gICAgcmV0dXJuIHR5cGVvZiBfZmlsbCA9PT0gJ3N0cmluZycgPyBfZmlsbCA6IHVuZGVmaW5lZDtcbiAgfVxuICB2YXIgZmlsbCA9IGFjdGl2ZVNoYXBlLmZpbGw7XG4gIHJldHVybiB0eXBlb2YgZmlsbCA9PT0gJ3N0cmluZycgPyBmaWxsIDogdW5kZWZpbmVkO1xufVxudmFyIFNldFBpZVRvb2x0aXBFbnRyeVNldHRpbmdzID0gLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oX3JlZiA9PiB7XG4gIHZhciBkYXRhS2V5ID0gX3JlZi5kYXRhS2V5LFxuICAgIG5hbWVLZXkgPSBfcmVmLm5hbWVLZXksXG4gICAgc2VjdG9ycyA9IF9yZWYuc2VjdG9ycyxcbiAgICBzdHJva2UgPSBfcmVmLnN0cm9rZSxcbiAgICBzdHJva2VXaWR0aCA9IF9yZWYuc3Ryb2tlV2lkdGgsXG4gICAgZmlsbCA9IF9yZWYuZmlsbCxcbiAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgIGhpZGUgPSBfcmVmLmhpZGUsXG4gICAgdG9vbHRpcFR5cGUgPSBfcmVmLnRvb2x0aXBUeXBlLFxuICAgIGZvcm1hdHRlciA9IF9yZWYuZm9ybWF0dGVyLFxuICAgIGlkID0gX3JlZi5pZCxcbiAgICBhY3RpdmVTaGFwZSA9IF9yZWYuYWN0aXZlU2hhcGU7XG4gIHZhciBhY3RpdmVTaGFwZUZpbGwgPSBnZXRBY3RpdmVTaGFwZUZpbGwoYWN0aXZlU2hhcGUpO1xuICB2YXIgdG9vbHRpcERhdGFEZWZpbmVkT25JdGVtID0gc2VjdG9ycy5tYXAoc2VjdG9yID0+IHtcbiAgICB2YXIgc2VjdG9yVG9vbHRpcFBheWxvYWQgPSBzZWN0b3IudG9vbHRpcFBheWxvYWQ7XG4gICAgaWYgKGFjdGl2ZVNoYXBlRmlsbCA9PSBudWxsIHx8IHNlY3RvclRvb2x0aXBQYXlsb2FkID09IG51bGwpIHtcbiAgICAgIHJldHVybiBzZWN0b3JUb29sdGlwUGF5bG9hZDtcbiAgICB9XG4gICAgcmV0dXJuIHNlY3RvclRvb2x0aXBQYXlsb2FkLm1hcChpdGVtID0+IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaXRlbSksIHt9LCB7XG4gICAgICBjb2xvcjogYWN0aXZlU2hhcGVGaWxsLFxuICAgICAgZmlsbDogYWN0aXZlU2hhcGVGaWxsXG4gICAgfSkpO1xuICB9KTtcbiAgdmFyIHRvb2x0aXBFbnRyeVNldHRpbmdzID0ge1xuICAgIGRhdGFEZWZpbmVkT25JdGVtOiB0b29sdGlwRGF0YURlZmluZWRPbkl0ZW0sXG4gICAgZ2V0UG9zaXRpb246IGluZGV4ID0+IHtcbiAgICAgIHZhciBfc2VjdG9ycyROdW1iZXI7XG4gICAgICByZXR1cm4gKF9zZWN0b3JzJE51bWJlciA9IHNlY3RvcnNbTnVtYmVyKGluZGV4KV0pID09PSBudWxsIHx8IF9zZWN0b3JzJE51bWJlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3NlY3RvcnMkTnVtYmVyLnRvb2x0aXBQb3NpdGlvbjtcbiAgICB9LFxuICAgIHNldHRpbmdzOiB7XG4gICAgICBzdHJva2UsXG4gICAgICBzdHJva2VXaWR0aCxcbiAgICAgIGZpbGwsXG4gICAgICBkYXRhS2V5LFxuICAgICAgbmFtZUtleSxcbiAgICAgIG5hbWU6IGdldFRvb2x0aXBOYW1lUHJvcChuYW1lLCBkYXRhS2V5KSxcbiAgICAgIGhpZGUsXG4gICAgICB0eXBlOiB0b29sdGlwVHlwZSxcbiAgICAgIGNvbG9yOiBmaWxsLFxuICAgICAgdW5pdDogJycsXG4gICAgICAvLyB3aHkgZG9lc24ndCBQaWUgc3VwcG9ydCB1bml0P1xuICAgICAgZm9ybWF0dGVyLFxuICAgICAgZ3JhcGhpY2FsSXRlbUlkOiBpZFxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNldFRvb2x0aXBFbnRyeVNldHRpbmdzLCB7XG4gICAgdG9vbHRpcEVudHJ5U2V0dGluZ3M6IHRvb2x0aXBFbnRyeVNldHRpbmdzXG4gIH0pO1xufSk7XG52YXIgZ2V0VGV4dEFuY2hvciA9ICh4LCBjeCkgPT4ge1xuICBpZiAoeCA+IGN4KSB7XG4gICAgcmV0dXJuICdzdGFydCc7XG4gIH1cbiAgaWYgKHggPCBjeCkge1xuICAgIHJldHVybiAnZW5kJztcbiAgfVxuICByZXR1cm4gJ21pZGRsZSc7XG59O1xudmFyIGdldE91dGVyUmFkaXVzID0gKGRhdGFQb2ludCwgb3V0ZXJSYWRpdXMsIG1heFBpZVJhZGl1cykgPT4ge1xuICBpZiAodHlwZW9mIG91dGVyUmFkaXVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGdldFBlcmNlbnRWYWx1ZShvdXRlclJhZGl1cyhkYXRhUG9pbnQpLCBtYXhQaWVSYWRpdXMsIG1heFBpZVJhZGl1cyAqIDAuOCk7XG4gIH1cbiAgcmV0dXJuIGdldFBlcmNlbnRWYWx1ZShvdXRlclJhZGl1cywgbWF4UGllUmFkaXVzLCBtYXhQaWVSYWRpdXMgKiAwLjgpO1xufTtcbnZhciBwYXJzZUNvb3JkaW5hdGVPZlBpZSA9IChwaWVTZXR0aW5ncywgb2Zmc2V0LCBkYXRhUG9pbnQpID0+IHtcbiAgdmFyIHRvcCA9IG9mZnNldC50b3AsXG4gICAgbGVmdCA9IG9mZnNldC5sZWZ0LFxuICAgIHdpZHRoID0gb2Zmc2V0LndpZHRoLFxuICAgIGhlaWdodCA9IG9mZnNldC5oZWlnaHQ7XG4gIHZhciBtYXhQaWVSYWRpdXMgPSBnZXRNYXhSYWRpdXMod2lkdGgsIGhlaWdodCk7XG4gIHZhciBjeCA9IGxlZnQgKyBnZXRQZXJjZW50VmFsdWUocGllU2V0dGluZ3MuY3gsIHdpZHRoLCB3aWR0aCAvIDIpO1xuICB2YXIgY3kgPSB0b3AgKyBnZXRQZXJjZW50VmFsdWUocGllU2V0dGluZ3MuY3ksIGhlaWdodCwgaGVpZ2h0IC8gMik7XG4gIHZhciBpbm5lclJhZGl1cyA9IGdldFBlcmNlbnRWYWx1ZShwaWVTZXR0aW5ncy5pbm5lclJhZGl1cywgbWF4UGllUmFkaXVzLCAwKTtcbiAgdmFyIG91dGVyUmFkaXVzID0gZ2V0T3V0ZXJSYWRpdXMoZGF0YVBvaW50LCBwaWVTZXR0aW5ncy5vdXRlclJhZGl1cywgbWF4UGllUmFkaXVzKTtcbiAgdmFyIG1heFJhZGl1cyA9IHBpZVNldHRpbmdzLm1heFJhZGl1cyB8fCBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCkgLyAyO1xuICByZXR1cm4ge1xuICAgIGN4LFxuICAgIGN5LFxuICAgIGlubmVyUmFkaXVzLFxuICAgIG91dGVyUmFkaXVzLFxuICAgIG1heFJhZGl1c1xuICB9O1xufTtcbnZhciBwYXJzZURlbHRhQW5nbGUgPSAoc3RhcnRBbmdsZSwgZW5kQW5nbGUpID0+IHtcbiAgdmFyIHNpZ24gPSBtYXRoU2lnbihlbmRBbmdsZSAtIHN0YXJ0QW5nbGUpO1xuICB2YXIgZGVsdGFBbmdsZSA9IE1hdGgubWluKE1hdGguYWJzKGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSksIDM2MCk7XG4gIHJldHVybiBzaWduICogZGVsdGFBbmdsZTtcbn07XG52YXIgcmVuZGVyTGFiZWxMaW5lSXRlbSA9IChvcHRpb24sIHByb3BzKSA9PiB7XG4gIGlmICgvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQob3B0aW9uKSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3Igd2UgY2FuJ3Qga25vdyBpZiB0aGUgdHlwZSBvZiBwcm9wcyBtYXRjaGVzIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQob3B0aW9uLCBwcm9wcyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0aW9uKHByb3BzKTtcbiAgfVxuICB2YXIgY2xhc3NOYW1lID0gY2xzeCgncmVjaGFydHMtcGllLWxhYmVsLWxpbmUnLCB0eXBlb2Ygb3B0aW9uICE9PSAnYm9vbGVhbicgPyBvcHRpb24uY2xhc3NOYW1lIDogJycpO1xuICAvLyBSZWFjdCBkb2Vzbid0IGxpa2UgaXQgd2hlbiB3ZSBzcHJlYWQgYSBrZXkgcHJvcGVydHkgb250byBhbiBlbGVtZW50XG4gIHZhciBrZXkgPSBwcm9wcy5rZXksXG4gICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgX2V4Y2x1ZGVkKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEN1cnZlLCBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgIHR5cGU6IFwibGluZWFyXCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSkpO1xufTtcbnZhciByZW5kZXJMYWJlbEl0ZW0gPSAob3B0aW9uLCBwcm9wcywgdmFsdWUpID0+IHtcbiAgaWYgKC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChvcHRpb24pKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBlbGVtZW50IGNsb25pbmcgaXMgbm90IHR5cGVkXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQob3B0aW9uLCBwcm9wcyk7XG4gIH1cbiAgdmFyIGxhYmVsID0gdmFsdWU7XG4gIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGFiZWwgPSBvcHRpb24ocHJvcHMpO1xuICAgIGlmICgvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQobGFiZWwpKSB7XG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICB9XG4gIHZhciBjbGFzc05hbWUgPSBjbHN4KCdyZWNoYXJ0cy1waWUtbGFiZWwtdGV4dCcsIGdldENsYXNzTmFtZUZyb21Vbmtub3duKG9wdGlvbikpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgYWxpZ25tZW50QmFzZWxpbmU6IFwibWlkZGxlXCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSksIGxhYmVsKTtcbn07XG5mdW5jdGlvbiBQaWVMYWJlbHMoX3JlZjIpIHtcbiAgdmFyIHNlY3RvcnMgPSBfcmVmMi5zZWN0b3JzLFxuICAgIHByb3BzID0gX3JlZjIucHJvcHMsXG4gICAgc2hvd0xhYmVscyA9IF9yZWYyLnNob3dMYWJlbHM7XG4gIHZhciBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgIGxhYmVsTGluZSA9IHByb3BzLmxhYmVsTGluZSxcbiAgICBkYXRhS2V5ID0gcHJvcHMuZGF0YUtleTtcbiAgaWYgKCFzaG93TGFiZWxzIHx8ICFsYWJlbCB8fCAhc2VjdG9ycykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciBwaWVQcm9wcyA9IHN2Z1Byb3BlcnRpZXNOb0V2ZW50cyhwcm9wcyk7XG4gIHZhciBjdXN0b21MYWJlbFByb3BzID0gc3ZnUHJvcGVydGllc05vRXZlbnRzRnJvbVVua25vd24obGFiZWwpO1xuICB2YXIgY3VzdG9tTGFiZWxMaW5lUHJvcHMgPSBzdmdQcm9wZXJ0aWVzTm9FdmVudHNGcm9tVW5rbm93bihsYWJlbExpbmUpO1xuICB2YXIgb2Zmc2V0UmFkaXVzID0gdHlwZW9mIGxhYmVsID09PSAnb2JqZWN0JyAmJiAnb2Zmc2V0UmFkaXVzJyBpbiBsYWJlbCAmJiB0eXBlb2YgbGFiZWwub2Zmc2V0UmFkaXVzID09PSAnbnVtYmVyJyAmJiBsYWJlbC5vZmZzZXRSYWRpdXMgfHwgMjA7XG4gIHZhciBsYWJlbHMgPSBzZWN0b3JzLm1hcCgoZW50cnksIGkpID0+IHtcbiAgICB2YXIgbWlkQW5nbGUgPSAoZW50cnkuc3RhcnRBbmdsZSArIGVudHJ5LmVuZEFuZ2xlKSAvIDI7XG4gICAgdmFyIGVuZFBvaW50ID0gcG9sYXJUb0NhcnRlc2lhbihlbnRyeS5jeCwgZW50cnkuY3ksIGVudHJ5Lm91dGVyUmFkaXVzICsgb2Zmc2V0UmFkaXVzLCBtaWRBbmdsZSk7XG4gICAgdmFyIGxhYmVsUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwaWVQcm9wcyksIGVudHJ5KSwge30sIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgY3VzdG9tTGFiZWxQcm9wcyBpcyBjb250cmlidXRpbmcgdW5rbm93biBwcm9wc1xuICAgICAgc3Ryb2tlOiAnbm9uZSdcbiAgICB9LCBjdXN0b21MYWJlbFByb3BzKSwge30sIHtcbiAgICAgIGluZGV4OiBpLFxuICAgICAgdGV4dEFuY2hvcjogZ2V0VGV4dEFuY2hvcihlbmRQb2ludC54LCBlbnRyeS5jeClcbiAgICB9LCBlbmRQb2ludCk7XG4gICAgdmFyIGxpbmVQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHBpZVByb3BzKSwgZW50cnkpLCB7fSwge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBjdXN0b21MYWJlbExpbmVQcm9wcyBpcyBjb250cmlidXRpbmcgdW5rbm93biBwcm9wc1xuICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBjdXN0b21MYWJlbExpbmVQcm9wcyBpcyBjb250cmlidXRpbmcgdW5rbm93biBwcm9wc1xuICAgICAgc3Ryb2tlOiBlbnRyeS5maWxsXG4gICAgfSwgY3VzdG9tTGFiZWxMaW5lUHJvcHMpLCB7fSwge1xuICAgICAgaW5kZXg6IGksXG4gICAgICBwb2ludHM6IFtwb2xhclRvQ2FydGVzaWFuKGVudHJ5LmN4LCBlbnRyeS5jeSwgZW50cnkub3V0ZXJSYWRpdXMsIG1pZEFuZ2xlKSwgZW5kUG9pbnRdLFxuICAgICAga2V5OiAnbGluZSdcbiAgICB9KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoWkluZGV4TGF5ZXIsIHtcbiAgICAgIHpJbmRleDogRGVmYXVsdFpJbmRleGVzLmxhYmVsLFxuICAgICAga2V5OiBcImxhYmVsLVwiLmNvbmNhdChlbnRyeS5zdGFydEFuZ2xlLCBcIi1cIikuY29uY2F0KGVudHJ5LmVuZEFuZ2xlLCBcIi1cIikuY29uY2F0KGVudHJ5Lm1pZEFuZ2xlLCBcIi1cIikuY29uY2F0KGkpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGF5ZXIsIG51bGwsIGxhYmVsTGluZSAmJiByZW5kZXJMYWJlbExpbmVJdGVtKGxhYmVsTGluZSwgbGluZVByb3BzKSwgcmVuZGVyTGFiZWxJdGVtKGxhYmVsLCBsYWJlbFByb3BzLCBnZXRWYWx1ZUJ5RGF0YUtleShlbnRyeSwgZGF0YUtleSkpKSk7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGF5ZXIsIHtcbiAgICBjbGFzc05hbWU6IFwicmVjaGFydHMtcGllLWxhYmVsc1wiXG4gIH0sIGxhYmVscyk7XG59XG5mdW5jdGlvbiBQaWVMYWJlbExpc3QoX3JlZjMpIHtcbiAgdmFyIHNlY3RvcnMgPSBfcmVmMy5zZWN0b3JzLFxuICAgIHByb3BzID0gX3JlZjMucHJvcHMsXG4gICAgc2hvd0xhYmVscyA9IF9yZWYzLnNob3dMYWJlbHM7XG4gIHZhciBsYWJlbCA9IHByb3BzLmxhYmVsO1xuICBpZiAodHlwZW9mIGxhYmVsID09PSAnb2JqZWN0JyAmJiBsYWJlbCAhPSBudWxsICYmICdwb3NpdGlvbicgaW4gbGFiZWwpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxMaXN0RnJvbUxhYmVsUHJvcCwge1xuICAgICAgbGFiZWw6IGxhYmVsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBpZUxhYmVscywge1xuICAgIHNlY3RvcnM6IHNlY3RvcnMsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIHNob3dMYWJlbHM6IHNob3dMYWJlbHNcbiAgfSk7XG59XG5mdW5jdGlvbiBQaWVTZWN0b3JzKHByb3BzKSB7XG4gIHZhciBzZWN0b3JzID0gcHJvcHMuc2VjdG9ycyxcbiAgICBhY3RpdmVTaGFwZSA9IHByb3BzLmFjdGl2ZVNoYXBlLFxuICAgIGluYWN0aXZlU2hhcGVQcm9wID0gcHJvcHMuaW5hY3RpdmVTaGFwZSxcbiAgICBhbGxPdGhlclBpZVByb3BzID0gcHJvcHMuYWxsT3RoZXJQaWVQcm9wcyxcbiAgICBzaGFwZSA9IHByb3BzLnNoYXBlLFxuICAgIGlkID0gcHJvcHMuaWQsXG4gICAgYW5pbWF0aW9uRWxhcHNlZFRpbWUgPSBwcm9wcy5hbmltYXRpb25FbGFwc2VkVGltZSxcbiAgICBpc0FuaW1hdGluZyA9IHByb3BzLmlzQW5pbWF0aW5nLFxuICAgIGlzRW50cmFuY2UgPSBwcm9wcy5pc0VudHJhbmNlO1xuICB2YXIgYWN0aXZlSW5kZXggPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RBY3RpdmVUb29sdGlwSW5kZXgpO1xuICB2YXIgYWN0aXZlRGF0YUtleSA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdEFjdGl2ZVRvb2x0aXBEYXRhS2V5KTtcbiAgdmFyIGFjdGl2ZUdyYXBoaWNhbEl0ZW1JZCA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdEFjdGl2ZVRvb2x0aXBHcmFwaGljYWxJdGVtSWQpO1xuICB2YXIgb25Nb3VzZUVudGVyRnJvbVByb3BzID0gYWxsT3RoZXJQaWVQcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgb25JdGVtQ2xpY2tGcm9tUHJvcHMgPSBhbGxPdGhlclBpZVByb3BzLm9uQ2xpY2ssXG4gICAgb25Nb3VzZUxlYXZlRnJvbVByb3BzID0gYWxsT3RoZXJQaWVQcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgcmVzdE9mQWxsT3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhhbGxPdGhlclBpZVByb3BzLCBfZXhjbHVkZWQyKTtcbiAgdmFyIG9uTW91c2VFbnRlckZyb21Db250ZXh0ID0gdXNlTW91c2VFbnRlckl0ZW1EaXNwYXRjaChvbk1vdXNlRW50ZXJGcm9tUHJvcHMsIGFsbE90aGVyUGllUHJvcHMuZGF0YUtleSwgaWQpO1xuICB2YXIgb25Nb3VzZUxlYXZlRnJvbUNvbnRleHQgPSB1c2VNb3VzZUxlYXZlSXRlbURpc3BhdGNoKG9uTW91c2VMZWF2ZUZyb21Qcm9wcyk7XG4gIHZhciBvbkNsaWNrRnJvbUNvbnRleHQgPSB1c2VNb3VzZUNsaWNrSXRlbURpc3BhdGNoKG9uSXRlbUNsaWNrRnJvbVByb3BzLCBhbGxPdGhlclBpZVByb3BzLmRhdGFLZXksIGlkKTtcbiAgaWYgKHNlY3RvcnMgPT0gbnVsbCB8fCBzZWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgc2VjdG9ycy5tYXAoKGVudHJ5LCBpKSA9PiB7XG4gICAgaWYgKChlbnRyeSA9PT0gbnVsbCB8fCBlbnRyeSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZW50cnkuc3RhcnRBbmdsZSkgPT09IDAgJiYgKGVudHJ5ID09PSBudWxsIHx8IGVudHJ5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbnRyeS5lbmRBbmdsZSkgPT09IDAgJiYgc2VjdG9ycy5sZW5ndGggIT09IDEpIHJldHVybiBudWxsO1xuXG4gICAgLy8gRm9yIFBpZSBjaGFydHMsIHdoZW4gbXVsdGlwbGUgUGllcyBzaGFyZSB0aGUgc2FtZSBkYXRhS2V5LCB3ZSBuZWVkIHRvIGVuc3VyZSBvbmx5IHRoZSBob3ZlcmVkIFBpZSdzIHNlY3RvciBpcyBhY3RpdmUuXG4gICAgLy8gV2UgZG8gdGhpcyBieSBjaGVja2luZyBpZiB0aGUgYWN0aXZlIGdyYXBoaWNhbCBpdGVtIElEIG1hdGNoZXMgdGhpcyBQaWUncyBJRC5cbiAgICB2YXIgZ3JhcGhpY2FsSXRlbU1hdGNoZXMgPSBhY3RpdmVHcmFwaGljYWxJdGVtSWQgPT0gbnVsbCB8fCBhY3RpdmVHcmFwaGljYWxJdGVtSWQgPT09IGlkO1xuICAgIHZhciBpc0FjdGl2ZSA9IFN0cmluZyhpKSA9PT0gYWN0aXZlSW5kZXggJiYgKGFjdGl2ZURhdGFLZXkgPT0gbnVsbCB8fCBhbGxPdGhlclBpZVByb3BzLmRhdGFLZXkgPT09IGFjdGl2ZURhdGFLZXkpICYmIGdyYXBoaWNhbEl0ZW1NYXRjaGVzO1xuICAgIHZhciBpbmFjdGl2ZVNoYXBlID0gYWN0aXZlSW5kZXggPyBpbmFjdGl2ZVNoYXBlUHJvcCA6IG51bGw7XG4gICAgdmFyIHNlY3Rvck9wdGlvbnMgPSBhY3RpdmVTaGFwZSAmJiBpc0FjdGl2ZSA/IGFjdGl2ZVNoYXBlIDogaW5hY3RpdmVTaGFwZTtcbiAgICB2YXIgc2VjdG9yUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGVudHJ5KSwge30sIHtcbiAgICAgIHN0cm9rZTogZW50cnkuc3Ryb2tlLFxuICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgaW5kZXg6IGksXG4gICAgICBpc0FjdGl2ZSxcbiAgICAgIGFuaW1hdGlvbkVsYXBzZWRUaW1lLFxuICAgICAgaXNBbmltYXRpbmcsXG4gICAgICBpc0VudHJhbmNlLFxuICAgICAgW0RBVEFfSVRFTV9JTkRFWF9BVFRSSUJVVEVfTkFNRV06IGksXG4gICAgICBbREFUQV9JVEVNX0dSQVBISUNBTF9JVEVNX0lEX0FUVFJJQlVURV9OQU1FXTogaWRcbiAgICB9KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGF5ZXIsIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJzZWN0b3ItXCIuY29uY2F0KGVudHJ5ID09PSBudWxsIHx8IGVudHJ5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbnRyeS5zdGFydEFuZ2xlLCBcIi1cIikuY29uY2F0KGVudHJ5ID09PSBudWxsIHx8IGVudHJ5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbnRyeS5lbmRBbmdsZSwgXCItXCIpLmNvbmNhdChlbnRyeS5taWRBbmdsZSwgXCItXCIpLmNvbmNhdChpKSxcbiAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgIGNsYXNzTmFtZTogXCJyZWNoYXJ0cy1waWUtc2VjdG9yXCJcbiAgICB9LCBhZGFwdEV2ZW50c09mQ2hpbGQocmVzdE9mQWxsT3RoZXJQcm9wcywgZW50cnksIGkpLCB7XG4gICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlckZyb21Db250ZXh0KGVudHJ5LCBpKSxcbiAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlRnJvbUNvbnRleHQoZW50cnksIGkpLFxuICAgICAgb25DbGljazogb25DbGlja0Zyb21Db250ZXh0KGVudHJ5LCBpKVxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaGFwZSwge1xuICAgICAgb3B0aW9uOiBzZWN0b3JPcHRpb25zICE9PSBudWxsICYmIHNlY3Rvck9wdGlvbnMgIT09IHZvaWQgMCA/IHNlY3Rvck9wdGlvbnMgOiBzaGFwZSxcbiAgICAgIERlZmF1bHRTaGFwZTogZGVmYXVsdFBpZVNlY3RvclNoYXBlLFxuICAgICAgc2hhcGVQcm9wczogc2VjdG9yUHJvcHNcbiAgICB9KSk7XG4gIH0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlUGllU2VjdG9ycyhfcmVmNCkge1xuICB2YXIgX3BpZVNldHRpbmdzJHBhZGRpbmdBO1xuICB2YXIgcGllU2V0dGluZ3MgPSBfcmVmNC5waWVTZXR0aW5ncyxcbiAgICBkaXNwbGF5ZWREYXRhID0gX3JlZjQuZGlzcGxheWVkRGF0YSxcbiAgICBjZWxscyA9IF9yZWY0LmNlbGxzLFxuICAgIG9mZnNldCA9IF9yZWY0Lm9mZnNldDtcbiAgdmFyIGNvcm5lclJhZGl1cyA9IHBpZVNldHRpbmdzLmNvcm5lclJhZGl1cyxcbiAgICBzdGFydEFuZ2xlID0gcGllU2V0dGluZ3Muc3RhcnRBbmdsZSxcbiAgICBlbmRBbmdsZSA9IHBpZVNldHRpbmdzLmVuZEFuZ2xlLFxuICAgIGRhdGFLZXkgPSBwaWVTZXR0aW5ncy5kYXRhS2V5LFxuICAgIG5hbWVLZXkgPSBwaWVTZXR0aW5ncy5uYW1lS2V5LFxuICAgIHRvb2x0aXBUeXBlID0gcGllU2V0dGluZ3MudG9vbHRpcFR5cGU7XG4gIHZhciBtaW5BbmdsZSA9IE1hdGguYWJzKHBpZVNldHRpbmdzLm1pbkFuZ2xlKTtcbiAgdmFyIGRlbHRhQW5nbGUgPSBwYXJzZURlbHRhQW5nbGUoc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xuICB2YXIgYWJzRGVsdGFBbmdsZSA9IE1hdGguYWJzKGRlbHRhQW5nbGUpO1xuICB2YXIgcGFkZGluZ0FuZ2xlID0gZGlzcGxheWVkRGF0YS5sZW5ndGggPD0gMSA/IDAgOiAoX3BpZVNldHRpbmdzJHBhZGRpbmdBID0gcGllU2V0dGluZ3MucGFkZGluZ0FuZ2xlKSAhPT0gbnVsbCAmJiBfcGllU2V0dGluZ3MkcGFkZGluZ0EgIT09IHZvaWQgMCA/IF9waWVTZXR0aW5ncyRwYWRkaW5nQSA6IDA7XG4gIHZhciBub3RaZXJvSXRlbUNvdW50ID0gZGlzcGxheWVkRGF0YS5maWx0ZXIoZW50cnkgPT4gZ2V0VmFsdWVCeURhdGFLZXkoZW50cnksIGRhdGFLZXksIDApICE9PSAwKS5sZW5ndGg7XG4gIHZhciB0b3RhbFBhZGRpbmdBbmdsZSA9IChhYnNEZWx0YUFuZ2xlID49IDM2MCA/IG5vdFplcm9JdGVtQ291bnQgOiBub3RaZXJvSXRlbUNvdW50IC0gMSkgKiBwYWRkaW5nQW5nbGU7XG4gIHZhciBzdW0gPSBkaXNwbGF5ZWREYXRhLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xuICAgIHZhciB2YWwgPSBnZXRWYWx1ZUJ5RGF0YUtleShlbnRyeSwgZGF0YUtleSwgMCk7XG4gICAgcmV0dXJuIHJlc3VsdCArIChpc051bWJlcih2YWwpID8gdmFsIDogMCk7XG4gIH0sIDApO1xuXG4gIC8vIE9ubHkgYXBwbHkgbWluQW5nbGUgcmVkaXN0cmlidXRpb24gd2hlbiBhdCBsZWFzdCBvbmUgbm9uLXplcm8gc2VnbWVudCdzXG4gIC8vIG5hdHVyYWwgYW5nbGUgZmFsbHMgYmVsb3cgdGhlIG1pbkFuZ2xlIHRocmVzaG9sZC4gT3RoZXJ3aXNlLCBtaW5BbmdsZVxuICAvLyB1bm5lY2Vzc2FyaWx5IHNoaWZ0cyBhbGwgc2VnbWVudHMgZXZlbiB3aGVuIG5vbmUgbmVlZCB0aGUgYm9vc3QuXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3JlY2hhcnRzL3JlY2hhcnRzL2lzc3Vlcy82ODE0XG4gIHZhciBuZWVkc01pbkFuZ2xlQWRqdXN0bWVudCA9IG1pbkFuZ2xlID4gMCAmJiBzdW0gPiAwICYmIGRpc3BsYXllZERhdGEuc29tZShlbnRyeSA9PiB7XG4gICAgdmFyIHZhbCA9IGdldFZhbHVlQnlEYXRhS2V5KGVudHJ5LCBkYXRhS2V5LCAwKTtcbiAgICB2YXIgcGVyY2VudCA9IChpc051bWJlcih2YWwpID8gdmFsIDogMCkgLyBzdW07XG4gICAgcmV0dXJuIHZhbCAhPT0gMCAmJiBwZXJjZW50ICogYWJzRGVsdGFBbmdsZSA8IG1pbkFuZ2xlO1xuICB9KTtcbiAgdmFyIGVmZmVjdGl2ZU1pbkFuZ2xlID0gbmVlZHNNaW5BbmdsZUFkanVzdG1lbnQgPyBtaW5BbmdsZSA6IDA7XG4gIHZhciByZWFsVG90YWxBbmdsZSA9IGFic0RlbHRhQW5nbGUgLSBub3RaZXJvSXRlbUNvdW50ICogZWZmZWN0aXZlTWluQW5nbGUgLSB0b3RhbFBhZGRpbmdBbmdsZTtcbiAgdmFyIHNlY3RvcnM7XG4gIGlmIChzdW0gPiAwKSB7XG4gICAgdmFyIHByZXY7XG4gICAgc2VjdG9ycyA9IGRpc3BsYXllZERhdGEubWFwKChlbnRyeSwgaSkgPT4ge1xuICAgICAgdmFyIHZhbCA9IGdldFZhbHVlQnlEYXRhS2V5KGVudHJ5LCBkYXRhS2V5LCAwKTtcbiAgICAgIHZhciBuYW1lID0gZ2V0VmFsdWVCeURhdGFLZXkoZW50cnksIG5hbWVLZXksIGkpO1xuICAgICAgdmFyIGNvb3JkaW5hdGUgPSBwYXJzZUNvb3JkaW5hdGVPZlBpZShwaWVTZXR0aW5ncywgb2Zmc2V0LCBlbnRyeSk7XG4gICAgICB2YXIgcGVyY2VudCA9IChpc051bWJlcih2YWwpID8gdmFsIDogMCkgLyBzdW07XG4gICAgICB2YXIgdGVtcFN0YXJ0QW5nbGU7XG5cbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgY2FuJ3Qgc3ByZWFkIHVua25vd25cbiAgICAgIHZhciBlbnRyeVdpdGhDZWxsSW5mbyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZW50cnkpLCBjZWxscyAmJiBjZWxsc1tpXSAmJiBjZWxsc1tpXS5wcm9wcyk7XG4gICAgICB2YXIgc2VjdG9yQ29sb3IgPSBlbnRyeVdpdGhDZWxsSW5mbyAhPSBudWxsICYmICdmaWxsJyBpbiBlbnRyeVdpdGhDZWxsSW5mbyAmJiB0eXBlb2YgZW50cnlXaXRoQ2VsbEluZm8uZmlsbCA9PT0gJ3N0cmluZycgPyBlbnRyeVdpdGhDZWxsSW5mby5maWxsIDogcGllU2V0dGluZ3MuZmlsbDtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHRlbXBTdGFydEFuZ2xlID0gcHJldi5lbmRBbmdsZSArIG1hdGhTaWduKGRlbHRhQW5nbGUpICogcGFkZGluZ0FuZ2xlICogKHZhbCAhPT0gMCA/IDEgOiAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBTdGFydEFuZ2xlID0gc3RhcnRBbmdsZTtcbiAgICAgIH1cbiAgICAgIHZhciB0ZW1wRW5kQW5nbGUgPSB0ZW1wU3RhcnRBbmdsZSArIG1hdGhTaWduKGRlbHRhQW5nbGUpICogKCh2YWwgIT09IDAgPyBlZmZlY3RpdmVNaW5BbmdsZSA6IDApICsgcGVyY2VudCAqIHJlYWxUb3RhbEFuZ2xlKTtcbiAgICAgIHZhciBtaWRBbmdsZSA9ICh0ZW1wU3RhcnRBbmdsZSArIHRlbXBFbmRBbmdsZSkgLyAyO1xuICAgICAgdmFyIG1pZGRsZVJhZGl1cyA9IChjb29yZGluYXRlLmlubmVyUmFkaXVzICsgY29vcmRpbmF0ZS5vdXRlclJhZGl1cykgLyAyO1xuICAgICAgdmFyIHRvb2x0aXBQYXlsb2FkID0gW3tcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgcGF5bG9hZDogZW50cnlXaXRoQ2VsbEluZm8sXG4gICAgICAgIGRhdGFLZXksXG4gICAgICAgIHR5cGU6IHRvb2x0aXBUeXBlLFxuICAgICAgICBjb2xvcjogc2VjdG9yQ29sb3IsXG4gICAgICAgIGZpbGw6IHNlY3RvckNvbG9yLFxuICAgICAgICBncmFwaGljYWxJdGVtSWQ6IHBpZVNldHRpbmdzLmlkXG4gICAgICB9XTtcbiAgICAgIHZhciB0b29sdGlwUG9zaXRpb24gPSBwb2xhclRvQ2FydGVzaWFuKGNvb3JkaW5hdGUuY3gsIGNvb3JkaW5hdGUuY3ksIG1pZGRsZVJhZGl1cywgbWlkQW5nbGUpO1xuICAgICAgcHJldiA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHBpZVNldHRpbmdzLnByZXNlbnRhdGlvblByb3BzKSwge30sIHtcbiAgICAgICAgcGVyY2VudCxcbiAgICAgICAgY29ybmVyUmFkaXVzOiB0eXBlb2YgY29ybmVyUmFkaXVzID09PSAnc3RyaW5nJyA/IHBhcnNlRmxvYXQoY29ybmVyUmFkaXVzKSA6IGNvcm5lclJhZGl1cyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdG9vbHRpcFBheWxvYWQsXG4gICAgICAgIG1pZEFuZ2xlLFxuICAgICAgICBtaWRkbGVSYWRpdXMsXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvblxuICAgICAgfSwgZW50cnlXaXRoQ2VsbEluZm8pLCBjb29yZGluYXRlKSwge30sIHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgZGF0YUtleSxcbiAgICAgICAgc3RhcnRBbmdsZTogdGVtcFN0YXJ0QW5nbGUsXG4gICAgICAgIGVuZEFuZ2xlOiB0ZW1wRW5kQW5nbGUsXG4gICAgICAgIHBheWxvYWQ6IGVudHJ5V2l0aENlbGxJbmZvLFxuICAgICAgICBwYWRkaW5nQW5nbGU6IHZhbCAhPT0gMCA/IG1hdGhTaWduKGRlbHRhQW5nbGUpICogcGFkZGluZ0FuZ2xlIDogMFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc2VjdG9ycztcbn1cbmZ1bmN0aW9uIFBpZUxhYmVsTGlzdFByb3ZpZGVyKF9yZWY1KSB7XG4gIHZhciBzaG93TGFiZWxzID0gX3JlZjUuc2hvd0xhYmVscyxcbiAgICBzZWN0b3JzID0gX3JlZjUuc2VjdG9ycyxcbiAgICBjaGlsZHJlbiA9IF9yZWY1LmNoaWxkcmVuO1xuICB2YXIgbGFiZWxMaXN0RW50cmllcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghc2hvd0xhYmVscyB8fCAhc2VjdG9ycykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gc2VjdG9ycy5tYXAoZW50cnkgPT4gKHtcbiAgICAgIHZhbHVlOiBlbnRyeS52YWx1ZSxcbiAgICAgIHBheWxvYWQ6IGVudHJ5LnBheWxvYWQsXG4gICAgICBjbG9ja1dpc2U6IGZhbHNlLFxuICAgICAgcGFyZW50Vmlld0JveDogdW5kZWZpbmVkLFxuICAgICAgdmlld0JveDoge1xuICAgICAgICBjeDogZW50cnkuY3gsXG4gICAgICAgIGN5OiBlbnRyeS5jeSxcbiAgICAgICAgaW5uZXJSYWRpdXM6IGVudHJ5LmlubmVyUmFkaXVzLFxuICAgICAgICBvdXRlclJhZGl1czogZW50cnkub3V0ZXJSYWRpdXMsXG4gICAgICAgIHN0YXJ0QW5nbGU6IGVudHJ5LnN0YXJ0QW5nbGUsXG4gICAgICAgIGVuZEFuZ2xlOiBlbnRyeS5lbmRBbmdsZSxcbiAgICAgICAgY2xvY2tXaXNlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGZpbGw6IGVudHJ5LmZpbGxcbiAgICB9KSk7XG4gIH0sIFtzZWN0b3JzLCBzaG93TGFiZWxzXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb2xhckxhYmVsTGlzdENvbnRleHRQcm92aWRlciwge1xuICAgIHZhbHVlOiBzaG93TGFiZWxzID8gbGFiZWxMaXN0RW50cmllcyA6IHVuZGVmaW5lZFxuICB9LCBjaGlsZHJlbik7XG59XG52YXIgZGVmYXVsdFBpZUFuaW1hdGVJdGVtcyA9IChpdGVtcywgYW5pbWF0aW9uRWxhcHNlZFRpbWUpID0+IHtcbiAgaWYgKGl0ZW1zID09IG51bGwpIHJldHVybiBbXTtcbiAgdmFyIHN0ZXBEYXRhID0gW107XG4gIHZhciBmaXJzdE5vblJlbW92ZWQgPSBpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5zdGF0dXMgIT09ICdyZW1vdmVkJyk7XG4gIHZhciBjdXJBbmdsZSA9IGZpcnN0Tm9uUmVtb3ZlZCA/IGZpcnN0Tm9uUmVtb3ZlZC5uZXh0LnN0YXJ0QW5nbGUgOiAwO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpdGVtLnN0YXR1cyA9PT0gJ3JlbW92ZWQnKSByZXR1cm47XG4gICAgdmFyIHBhZGRpbmdBbmdsZSA9IGluZGV4ID4gMCA/IGdldChpdGVtLm5leHQsICdwYWRkaW5nQW5nbGUnLCAwKSA6IDA7XG4gICAgaWYgKGl0ZW0uc3RhdHVzID09PSAnbWF0Y2hlZCcpIHtcbiAgICAgIHZhciBhbmdsZSA9IGludGVycG9sYXRlKGl0ZW0ucHJldi5lbmRBbmdsZSAtIGl0ZW0ucHJldi5zdGFydEFuZ2xlLCBpdGVtLm5leHQuZW5kQW5nbGUgLSBpdGVtLm5leHQuc3RhcnRBbmdsZSwgYW5pbWF0aW9uRWxhcHNlZFRpbWUpO1xuICAgICAgdmFyIGxhdGVzdCA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaXRlbS5uZXh0KSwge30sIHtcbiAgICAgICAgc3RhcnRBbmdsZTogY3VyQW5nbGUgKyBwYWRkaW5nQW5nbGUsXG4gICAgICAgIGVuZEFuZ2xlOiBjdXJBbmdsZSArIGFuZ2xlICsgcGFkZGluZ0FuZ2xlXG4gICAgICB9KTtcbiAgICAgIHN0ZXBEYXRhLnB1c2gobGF0ZXN0KTtcbiAgICAgIGN1ckFuZ2xlID0gbGF0ZXN0LmVuZEFuZ2xlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhZGRlZFxuICAgICAgdmFyIGRlbHRhQW5nbGUgPSBpbnRlcnBvbGF0ZSgwLCBpdGVtLm5leHQuZW5kQW5nbGUgLSBpdGVtLm5leHQuc3RhcnRBbmdsZSwgYW5pbWF0aW9uRWxhcHNlZFRpbWUpO1xuICAgICAgdmFyIF9sYXRlc3QgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGl0ZW0ubmV4dCksIHt9LCB7XG4gICAgICAgIHN0YXJ0QW5nbGU6IGN1ckFuZ2xlICsgcGFkZGluZ0FuZ2xlLFxuICAgICAgICBlbmRBbmdsZTogY3VyQW5nbGUgKyBkZWx0YUFuZ2xlICsgcGFkZGluZ0FuZ2xlXG4gICAgICB9KTtcbiAgICAgIHN0ZXBEYXRhLnB1c2goX2xhdGVzdCk7XG4gICAgICBjdXJBbmdsZSA9IF9sYXRlc3QuZW5kQW5nbGU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN0ZXBEYXRhO1xufTtcbmZ1bmN0aW9uIFNlY3RvcnNXaXRoQW5pbWF0aW9uKF9yZWY2KSB7XG4gIHZhciBfZmlyc3RTZWN0b3IkY3gsIF9maXJzdFNlY3RvciRjeSwgX2ZpcnN0U2VjdG9yJGlubmVyUmFkLCBfZmlyc3RTZWN0b3Ikb3V0ZXJSYWQ7XG4gIHZhciBwcm9wcyA9IF9yZWY2LnByb3BzLFxuICAgIHByZXZpb3VzU2VjdG9yc1JlZiA9IF9yZWY2LnByZXZpb3VzU2VjdG9yc1JlZixcbiAgICBpZCA9IF9yZWY2LmlkO1xuICB2YXIgc2VjdG9ycyA9IHByb3BzLnNlY3RvcnMsXG4gICAgYWN0aXZlU2hhcGUgPSBwcm9wcy5hY3RpdmVTaGFwZSxcbiAgICBpbmFjdGl2ZVNoYXBlID0gcHJvcHMuaW5hY3RpdmVTaGFwZSxcbiAgICBhbmltYXRpb25JbnRlcnBvbGF0ZUZuID0gcHJvcHMuYW5pbWF0aW9uSW50ZXJwb2xhdGVGbjtcbiAgdmFyIF91c2VBbmltYXRpb25DYWxsYmFjayA9IHVzZUFuaW1hdGlvbkNhbGxiYWNrcyhwcm9wcy5vbkFuaW1hdGlvblN0YXJ0LCBwcm9wcy5vbkFuaW1hdGlvbkVuZCksXG4gICAgaXNBbmltYXRpbmcgPSBfdXNlQW5pbWF0aW9uQ2FsbGJhY2suaXNBbmltYXRpbmcsXG4gICAgaGFuZGxlQW5pbWF0aW9uU3RhcnQgPSBfdXNlQW5pbWF0aW9uQ2FsbGJhY2suaGFuZGxlQW5pbWF0aW9uU3RhcnQsXG4gICAgaGFuZGxlQW5pbWF0aW9uRW5kID0gX3VzZUFuaW1hdGlvbkNhbGxiYWNrLmhhbmRsZUFuaW1hdGlvbkVuZDtcbiAgdmFyIGxheW91dCA9IHVzZVBvbGFyQ2hhcnRMYXlvdXQoKTtcbiAgaWYgKGxheW91dCA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgdmFyIGZpcnN0U2VjdG9yID0gc2VjdG9yc1swXTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBpZUxhYmVsTGlzdFByb3ZpZGVyLCB7XG4gICAgc2hvd0xhYmVsczogIWlzQW5pbWF0aW5nLFxuICAgIHNlY3RvcnM6IHNlY3RvcnNcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZWRJdGVtcywge1xuICAgIGFuaW1hdGlvbklucHV0OiBwcm9wcyxcbiAgICBhbmltYXRpb25JZFByZWZpeDogXCJyZWNoYXJ0cy1waWUtXCIsXG4gICAgaXRlbXM6IHNlY3RvcnMsXG4gICAgcHJldmlvdXNJdGVtc1JlZjogcHJldmlvdXNTZWN0b3JzUmVmLFxuICAgIGlzQW5pbWF0aW9uQWN0aXZlOiBwcm9wcy5pc0FuaW1hdGlvbkFjdGl2ZSxcbiAgICBhbmltYXRpb25CZWdpbjogcHJvcHMuYW5pbWF0aW9uQmVnaW4sXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IHByb3BzLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgIGFuaW1hdGlvbkVhc2luZzogcHJvcHMuYW5pbWF0aW9uRWFzaW5nLFxuICAgIG9uQW5pbWF0aW9uU3RhcnQ6IGhhbmRsZUFuaW1hdGlvblN0YXJ0LFxuICAgIG9uQW5pbWF0aW9uRW5kOiBoYW5kbGVBbmltYXRpb25FbmQsXG4gICAgYW5pbWF0aW9uSW50ZXJwb2xhdGVGbjogYW5pbWF0aW9uSW50ZXJwb2xhdGVGbixcbiAgICBhbmltYXRpb25NYXRjaEJ5OiBwcm9wcy5hbmltYXRpb25NYXRjaEJ5LFxuICAgIGxheW91dDogbGF5b3V0XG4gIH0sIChzdGVwRGF0YSwgYW5pbWF0aW9uRWxhcHNlZFRpbWUsIGlzRW50cmFuY2UpID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExheWVyLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQaWVTZWN0b3JzLCB7XG4gICAgc2VjdG9yczogc3RlcERhdGEsXG4gICAgYWN0aXZlU2hhcGU6IGFjdGl2ZVNoYXBlLFxuICAgIGluYWN0aXZlU2hhcGU6IGluYWN0aXZlU2hhcGUsXG4gICAgYWxsT3RoZXJQaWVQcm9wczogcHJvcHMsXG4gICAgc2hhcGU6IHByb3BzLnNoYXBlLFxuICAgIGlkOiBpZCxcbiAgICBhbmltYXRpb25FbGFwc2VkVGltZTogYW5pbWF0aW9uRWxhcHNlZFRpbWUsXG4gICAgaXNBbmltYXRpbmc6IGlzQW5pbWF0aW5nIHx8IGFuaW1hdGlvbkVsYXBzZWRUaW1lIDwgMSxcbiAgICBpc0VudHJhbmNlOiBpc0VudHJhbmNlXG4gIH0pKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBpZUxhYmVsTGlzdCwge1xuICAgIHNob3dMYWJlbHM6ICFpc0FuaW1hdGluZyxcbiAgICBzZWN0b3JzOiBzZWN0b3JzLFxuICAgIHByb3BzOiBwcm9wc1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9sYXJMYWJlbENvbnRleHRQcm92aWRlciwge1xuICAgIGN4OiAoX2ZpcnN0U2VjdG9yJGN4ID0gZmlyc3RTZWN0b3IgPT09IG51bGwgfHwgZmlyc3RTZWN0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpcnN0U2VjdG9yLmN4KSAhPT0gbnVsbCAmJiBfZmlyc3RTZWN0b3IkY3ggIT09IHZvaWQgMCA/IF9maXJzdFNlY3RvciRjeCA6IDAsXG4gICAgY3k6IChfZmlyc3RTZWN0b3IkY3kgPSBmaXJzdFNlY3RvciA9PT0gbnVsbCB8fCBmaXJzdFNlY3RvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmlyc3RTZWN0b3IuY3kpICE9PSBudWxsICYmIF9maXJzdFNlY3RvciRjeSAhPT0gdm9pZCAwID8gX2ZpcnN0U2VjdG9yJGN5IDogMCxcbiAgICBpbm5lclJhZGl1czogKF9maXJzdFNlY3RvciRpbm5lclJhZCA9IGZpcnN0U2VjdG9yID09PSBudWxsIHx8IGZpcnN0U2VjdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaXJzdFNlY3Rvci5pbm5lclJhZGl1cykgIT09IG51bGwgJiYgX2ZpcnN0U2VjdG9yJGlubmVyUmFkICE9PSB2b2lkIDAgPyBfZmlyc3RTZWN0b3IkaW5uZXJSYWQgOiAwLFxuICAgIG91dGVyUmFkaXVzOiAoX2ZpcnN0U2VjdG9yJG91dGVyUmFkID0gZmlyc3RTZWN0b3IgPT09IG51bGwgfHwgZmlyc3RTZWN0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpcnN0U2VjdG9yLm91dGVyUmFkaXVzKSAhPT0gbnVsbCAmJiBfZmlyc3RTZWN0b3Ikb3V0ZXJSYWQgIT09IHZvaWQgMCA/IF9maXJzdFNlY3RvciRvdXRlclJhZCA6IDAsXG4gICAgc3RhcnRBbmdsZTogcHJvcHMuc3RhcnRBbmdsZSxcbiAgICBlbmRBbmdsZTogcHJvcHMuZW5kQW5nbGUsXG4gICAgY2xvY2tXaXNlOiBmYWxzZVxuICB9LCBwcm9wcy5jaGlsZHJlbikpO1xufVxuZXhwb3J0IHZhciBkZWZhdWx0UGllUHJvcHMgPSB7XG4gIGFuaW1hdGlvbkJlZ2luOiA0MDAsXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiAxNTAwLFxuICBhbmltYXRpb25FYXNpbmc6ICdlYXNlJyxcbiAgYW5pbWF0aW9uSW50ZXJwb2xhdGVGbjogZGVmYXVsdFBpZUFuaW1hdGVJdGVtcyxcbiAgYW5pbWF0aW9uTWF0Y2hCeTogbWF0Y2hBcHBlbmQsXG4gIGN4OiAnNTAlJyxcbiAgY3k6ICc1MCUnLFxuICBkYXRhS2V5OiAndmFsdWUnLFxuICBlbmRBbmdsZTogMzYwLFxuICBmaWxsOiAnIzgwODA4MCcsXG4gIGhpZGU6IGZhbHNlLFxuICBpbm5lclJhZGl1czogMCxcbiAgaXNBbmltYXRpb25BY3RpdmU6ICdhdXRvJyxcbiAgbGFiZWw6IGZhbHNlLFxuICBsYWJlbExpbmU6IHRydWUsXG4gIGxlZ2VuZFR5cGU6ICdyZWN0JyxcbiAgbWluQW5nbGU6IDAsXG4gIG5hbWVLZXk6ICduYW1lJyxcbiAgb3V0ZXJSYWRpdXM6ICc4MCUnLFxuICBwYWRkaW5nQW5nbGU6IDAsXG4gIHJvb3RUYWJJbmRleDogMCxcbiAgc2hhcGU6IGRlZmF1bHRQaWVTZWN0b3JTaGFwZSxcbiAgc3RhcnRBbmdsZTogMCxcbiAgc3Ryb2tlOiAnI2ZmZicsXG4gIHpJbmRleDogRGVmYXVsdFpJbmRleGVzLmFyZWFcbn07XG5mdW5jdGlvbiBQaWVJbXBsKHByb3BzKSB7XG4gIHZhciBpZCA9IHByb3BzLmlkLFxuICAgIHByb3BzV2l0aG91dElkID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQzKTtcbiAgdmFyIGhpZGUgPSBwcm9wcy5oaWRlLFxuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICByb290VGFiSW5kZXggPSBwcm9wcy5yb290VGFiSW5kZXg7XG4gIHZhciBjZWxscyA9IHVzZU1lbW8oKCkgPT4gZmluZEFsbEJ5VHlwZShwcm9wcy5jaGlsZHJlbiwgQ2VsbCksIFtwcm9wcy5jaGlsZHJlbl0pO1xuICB2YXIgc2VjdG9ycyA9IHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IHNlbGVjdFBpZVNlY3RvcnMoc3RhdGUsIGlkLCBjZWxscykpO1xuICB2YXIgcHJldmlvdXNTZWN0b3JzUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgbGF5ZXJDbGFzcyA9IGNsc3goJ3JlY2hhcnRzLXBpZScsIGNsYXNzTmFtZSk7XG4gIGlmIChoaWRlIHx8IHNlY3RvcnMgPT0gbnVsbCkge1xuICAgIHByZXZpb3VzU2VjdG9yc1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGF5ZXIsIHtcbiAgICAgIHRhYkluZGV4OiByb290VGFiSW5kZXgsXG4gICAgICBjbGFzc05hbWU6IGxheWVyQ2xhc3NcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoWkluZGV4TGF5ZXIsIHtcbiAgICB6SW5kZXg6IHByb3BzLnpJbmRleFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZXRQaWVUb29sdGlwRW50cnlTZXR0aW5ncywge1xuICAgIGRhdGFLZXk6IHByb3BzLmRhdGFLZXksXG4gICAgbmFtZUtleTogcHJvcHMubmFtZUtleSxcbiAgICBzZWN0b3JzOiBzZWN0b3JzLFxuICAgIHN0cm9rZTogcHJvcHMuc3Ryb2tlLFxuICAgIHN0cm9rZVdpZHRoOiBwcm9wcy5zdHJva2VXaWR0aCxcbiAgICBmaWxsOiBwcm9wcy5maWxsLFxuICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgaGlkZTogcHJvcHMuaGlkZSxcbiAgICB0b29sdGlwVHlwZTogcHJvcHMudG9vbHRpcFR5cGUsXG4gICAgZm9ybWF0dGVyOiBwcm9wcy5mb3JtYXR0ZXIsXG4gICAgaWQ6IGlkLFxuICAgIGFjdGl2ZVNoYXBlOiBwcm9wcy5hY3RpdmVTaGFwZVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGF5ZXIsIHtcbiAgICB0YWJJbmRleDogcm9vdFRhYkluZGV4LFxuICAgIGNsYXNzTmFtZTogbGF5ZXJDbGFzc1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZWN0b3JzV2l0aEFuaW1hdGlvbiwge1xuICAgIHByb3BzOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzV2l0aG91dElkKSwge30sIHtcbiAgICAgIHNlY3RvcnNcbiAgICB9KSxcbiAgICBwcmV2aW91c1NlY3RvcnNSZWY6IHByZXZpb3VzU2VjdG9yc1JlZixcbiAgICBpZDogaWRcbiAgfSkpKTtcbn1cbi8qKlxuICogQGNvbnN1bWVzIFBvbGFyQ2hhcnRDb250ZXh0XG4gKiBAcHJvdmlkZXMgTGFiZWxMaXN0Q29udGV4dFxuICogQHByb3ZpZGVzIENlbGxSZWFkZXJcbiAqL1xuZnVuY3Rpb24gUGllRm4ob3V0c2lkZVByb3BzKSB7XG4gIHZhciBwcm9wcyA9IHJlc29sdmVEZWZhdWx0UHJvcHMob3V0c2lkZVByb3BzLCBkZWZhdWx0UGllUHJvcHMpO1xuICB2YXIgZXh0ZXJuYWxJZCA9IHByb3BzLmlkLFxuICAgIHByb3BzV2l0aG91dElkID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQ0KTtcbiAgdmFyIHByZXNlbnRhdGlvblByb3BzID0gc3ZnUHJvcGVydGllc05vRXZlbnRzKHByb3BzV2l0aG91dElkKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlZ2lzdGVyR3JhcGhpY2FsSXRlbUlkLCB7XG4gICAgaWQ6IGV4dGVybmFsSWQsXG4gICAgdHlwZTogXCJwaWVcIlxuICB9LCBpZCA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2V0UG9sYXJHcmFwaGljYWxJdGVtLCB7XG4gICAgdHlwZTogXCJwaWVcIixcbiAgICBpZDogaWQsXG4gICAgZGF0YTogcHJvcHNXaXRob3V0SWQuZGF0YSxcbiAgICBkYXRhS2V5OiBwcm9wc1dpdGhvdXRJZC5kYXRhS2V5LFxuICAgIGhpZGU6IHByb3BzV2l0aG91dElkLmhpZGUsXG4gICAgYW5nbGVBeGlzSWQ6IDAsXG4gICAgcmFkaXVzQXhpc0lkOiAwLFxuICAgIG5hbWU6IHByb3BzV2l0aG91dElkLm5hbWUsXG4gICAgbmFtZUtleTogcHJvcHNXaXRob3V0SWQubmFtZUtleSxcbiAgICB0b29sdGlwVHlwZTogcHJvcHNXaXRob3V0SWQudG9vbHRpcFR5cGUsXG4gICAgbGVnZW5kVHlwZTogcHJvcHNXaXRob3V0SWQubGVnZW5kVHlwZSxcbiAgICBmaWxsOiBwcm9wc1dpdGhvdXRJZC5maWxsLFxuICAgIGN4OiBwcm9wc1dpdGhvdXRJZC5jeCxcbiAgICBjeTogcHJvcHNXaXRob3V0SWQuY3ksXG4gICAgc3RhcnRBbmdsZTogcHJvcHNXaXRob3V0SWQuc3RhcnRBbmdsZSxcbiAgICBlbmRBbmdsZTogcHJvcHNXaXRob3V0SWQuZW5kQW5nbGUsXG4gICAgcGFkZGluZ0FuZ2xlOiBwcm9wc1dpdGhvdXRJZC5wYWRkaW5nQW5nbGUsXG4gICAgbWluQW5nbGU6IHByb3BzV2l0aG91dElkLm1pbkFuZ2xlLFxuICAgIGlubmVyUmFkaXVzOiBwcm9wc1dpdGhvdXRJZC5pbm5lclJhZGl1cyxcbiAgICBvdXRlclJhZGl1czogcHJvcHNXaXRob3V0SWQub3V0ZXJSYWRpdXMsXG4gICAgY29ybmVyUmFkaXVzOiBwcm9wc1dpdGhvdXRJZC5jb3JuZXJSYWRpdXMsXG4gICAgcHJlc2VudGF0aW9uUHJvcHM6IHByZXNlbnRhdGlvblByb3BzLFxuICAgIG1heFJhZGl1czogcHJvcHMubWF4UmFkaXVzXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZXRQaWVQYXlsb2FkTGVnZW5kLCBfZXh0ZW5kcyh7fSwgcHJvcHNXaXRob3V0SWQsIHtcbiAgICBpZDogaWRcbiAgfSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQaWVJbXBsLCBfZXh0ZW5kcyh7fSwgcHJvcHNXaXRob3V0SWQsIHtcbiAgICBpZDogaWRcbiAgfSkpKSk7XG59XG5leHBvcnQgdmFyIFBpZSA9IFBpZUZuO1xuLy8gQHRzLWV4cGVjdC1lcnJvciB3ZSBuZWVkIHRvIHNldCB0aGUgZGlzcGxheU5hbWUgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlc1xuUGllLmRpc3BsYXlOYW1lID0gJ1BpZSc7IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuL2hvb2tzJztcbmltcG9ydCB7IHVwZGF0ZVBvbGFyT3B0aW9ucyB9IGZyb20gJy4vcG9sYXJPcHRpb25zU2xpY2UnO1xuZXhwb3J0IGZ1bmN0aW9uIFJlcG9ydFBvbGFyT3B0aW9ucyhwcm9wcykge1xuICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHVwZGF0ZVBvbGFyT3B0aW9ucyhwcm9wcykpO1xuICB9LCBbZGlzcGF0Y2gsIHByb3BzXSk7XG4gIHJldHVybiBudWxsO1xufSIsInZhciBfZXhjbHVkZWQgPSBbXCJsYXlvdXRcIl07XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgcmV0dXJuIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKG4pIHsgZm9yICh2YXIgZSA9IDE7IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspIHsgdmFyIHQgPSBhcmd1bWVudHNbZV07IGZvciAodmFyIHIgaW4gdCkgKHt9KS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHIpICYmIChuW3JdID0gdFtyXSk7IH0gcmV0dXJuIG47IH0sIF9leHRlbmRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7IH1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhlLCB0KSB7IGlmIChudWxsID09IGUpIHJldHVybiB7fTsgdmFyIG8sIHIsIGkgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShlLCB0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG4gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyBmb3IgKHIgPSAwOyByIDwgbi5sZW5ndGg7IHIrKykgbyA9IG5bcl0sIC0xID09PSB0LmluZGV4T2YobykgJiYge30ucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLCBvKSAmJiAoaVtvXSA9IGVbb10pOyB9IHJldHVybiBpOyB9XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShyLCBlKSB7IGlmIChudWxsID09IHIpIHJldHVybiB7fTsgdmFyIHQgPSB7fTsgZm9yICh2YXIgbiBpbiByKSBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChyLCBuKSkgeyBpZiAoLTEgIT09IGUuaW5kZXhPZihuKSkgY29udGludWU7IHRbbl0gPSByW25dOyB9IHJldHVybiB0OyB9XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSkgeyBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgeyB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307IHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7IHJldHVybiAociA9IF90b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHsgdmFsdWU6IHQsIGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAgfSkgOiBlW3JdID0gdCwgZTsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gdHlwZW9mIGkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiB0IHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWNoYXJ0c1N0b3JlUHJvdmlkZXIgfSBmcm9tICcuLi9zdGF0ZS9SZWNoYXJ0c1N0b3JlUHJvdmlkZXInO1xuaW1wb3J0IHsgQ2hhcnREYXRhQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9jaGFydERhdGFDb250ZXh0JztcbmltcG9ydCB7IFJlcG9ydE1haW5DaGFydFByb3BzIH0gZnJvbSAnLi4vc3RhdGUvUmVwb3J0TWFpbkNoYXJ0UHJvcHMnO1xuaW1wb3J0IHsgUmVwb3J0Q2hhcnRQcm9wcyB9IGZyb20gJy4uL3N0YXRlL1JlcG9ydENoYXJ0UHJvcHMnO1xuaW1wb3J0IHsgUmVwb3J0RXZlbnRTZXR0aW5ncyB9IGZyb20gJy4uL3N0YXRlL1JlcG9ydEV2ZW50U2V0dGluZ3MnO1xuaW1wb3J0IHsgUmVwb3J0UG9sYXJPcHRpb25zIH0gZnJvbSAnLi4vc3RhdGUvUmVwb3J0UG9sYXJPcHRpb25zJztcbmltcG9ydCB7IENhdGVnb3JpY2FsQ2hhcnQgfSBmcm9tICcuL0NhdGVnb3JpY2FsQ2hhcnQnO1xuaW1wb3J0IHsgcmVzb2x2ZURlZmF1bHRQcm9wcyB9IGZyb20gJy4uL3V0aWwvcmVzb2x2ZURlZmF1bHRQcm9wcyc7XG5pbXBvcnQgeyBpbml0aWFsRXZlbnRTZXR0aW5nc1N0YXRlIH0gZnJvbSAnLi4vc3RhdGUvZXZlbnRTZXR0aW5nc1NsaWNlJztcbnZhciBkZWZhdWx0TWFyZ2luID0ge1xuICB0b3A6IDUsXG4gIHJpZ2h0OiA1LFxuICBib3R0b206IDUsXG4gIGxlZnQ6IDVcbn07XG5cbi8qKlxuICogVGhlc2UgZGVmYXVsdCBwcm9wcyBhcmUgdGhlIHNhbWUgZm9yIGFsbCBQb2xhckNoYXJ0IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCB2YXIgZGVmYXVsdFBvbGFyQ2hhcnRQcm9wcyA9IF9vYmplY3RTcHJlYWQoe1xuICBhY2Nlc3NpYmlsaXR5TGF5ZXI6IHRydWUsXG4gIHN0YWNrT2Zmc2V0OiAnbm9uZScsXG4gIGJhckNhdGVnb3J5R2FwOiAnMTAlJyxcbiAgYmFyR2FwOiA0LFxuICBtYXJnaW46IGRlZmF1bHRNYXJnaW4sXG4gIHJldmVyc2VTdGFja09yZGVyOiBmYWxzZSxcbiAgc3luY01ldGhvZDogJ2luZGV4JyxcbiAgbGF5b3V0OiAncmFkaWFsJyxcbiAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gIGN4OiAnNTAlJyxcbiAgY3k6ICc1MCUnLFxuICBpbm5lclJhZGl1czogMCxcbiAgb3V0ZXJSYWRpdXM6ICc4MCUnXG59LCBpbml0aWFsRXZlbnRTZXR0aW5nc1N0YXRlKTtcblxuLyoqXG4gKiBUaGVzZSBwcm9wcyBhcmUgcmVxdWlyZWQgZm9yIHRoZSBQb2xhckNoYXJ0IHRvIGZ1bmN0aW9uIGNvcnJlY3RseS5cbiAqIFVzZXJzIHVzdWFsbHkgd291bGQgbm90IG5lZWQgdG8gc3BlY2lmeSB0aGVzZSBleHBsaWNpdGx5LFxuICogYmVjYXVzZSB0aGUgY29udmVuaWVuY2UgY29tcG9uZW50cyBsaWtlIFBpZUNoYXJ0LCBSYWRhckNoYXJ0LCBldGMuXG4gKiB3aWxsIHByb3ZpZGUgdGhlc2UgZGVmYXVsdHMuXG4gKiBXZSBjYW4ndCBoYXZlIHRoZSBkZWZhdWx0cyBpbiB0aGlzIGZpbGUgYmVjYXVzZSBlYWNoIG9mIHRob3NlIGNvbnZlbmllbmNlIGNvbXBvbmVudHNcbiAqIGhhdmUgdGhlaXIgb3duIG9waW5pb25zIGFib3V0IHdoYXQgdGhleSBzaG91bGQgYmUuXG4gKi9cblxuLyoqXG4gKiBUaGVzZSBhcmUgb25lLXRpbWUsIGltbXV0YWJsZSBvcHRpb25zIHRoYXQgZGVjaWRlIHRoZSBjaGFydCdzIGJlaGF2aW9yLlxuICogVXNlcnMgd2hvIHdpc2ggdG8gY2FsbCBDYXJ0ZXNpYW5DaGFydCBtYXkgZGVjaWRlIHRvIHBhc3MgdGhlc2Ugb3B0aW9ucyBleHBsaWNpdGx5LFxuICogYnV0IHVzdWFsbHkgd2Ugd291bGQgZXhwZWN0IHRoYXQgdGhleSB1c2Ugb25lIG9mIHRoZSBjb252ZW5pZW5jZSBjb21wb25lbnRzIGxpa2UgUGllQ2hhcnQsIFJhZGFyQ2hhcnQsIGV0Yy5cbiAqL1xuXG5leHBvcnQgdmFyIFBvbGFyQ2hhcnQgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiBQb2xhckNoYXJ0KHByb3BzLCByZWYpIHtcbiAgdmFyIF9wb2xhckNoYXJ0UHJvcHMkaWQ7XG4gIHZhciBwb2xhckNoYXJ0UHJvcHMgPSByZXNvbHZlRGVmYXVsdFByb3BzKHByb3BzLmNhdGVnb3JpY2FsQ2hhcnRQcm9wcywgZGVmYXVsdFBvbGFyQ2hhcnRQcm9wcyk7XG4gIHZhciBsYXlvdXQgPSBwb2xhckNoYXJ0UHJvcHMubGF5b3V0LFxuICAgIG90aGVyQ2F0ZWdvcmljYWxQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwb2xhckNoYXJ0UHJvcHMsIF9leGNsdWRlZCk7XG4gIHZhciBjaGFydE5hbWUgPSBwcm9wcy5jaGFydE5hbWUsXG4gICAgZGVmYXVsdFRvb2x0aXBFdmVudFR5cGUgPSBwcm9wcy5kZWZhdWx0VG9vbHRpcEV2ZW50VHlwZSxcbiAgICB2YWxpZGF0ZVRvb2x0aXBFdmVudFR5cGVzID0gcHJvcHMudmFsaWRhdGVUb29sdGlwRXZlbnRUeXBlcyxcbiAgICB0b29sdGlwUGF5bG9hZFNlYXJjaGVyID0gcHJvcHMudG9vbHRpcFBheWxvYWRTZWFyY2hlcjtcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgY2hhcnROYW1lLFxuICAgIGRlZmF1bHRUb29sdGlwRXZlbnRUeXBlLFxuICAgIHZhbGlkYXRlVG9vbHRpcEV2ZW50VHlwZXMsXG4gICAgdG9vbHRpcFBheWxvYWRTZWFyY2hlcixcbiAgICBldmVudEVtaXR0ZXI6IHVuZGVmaW5lZFxuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVjaGFydHNTdG9yZVByb3ZpZGVyLCB7XG4gICAgcHJlbG9hZGVkU3RhdGU6IHtcbiAgICAgIG9wdGlvbnNcbiAgICB9LFxuICAgIHJlZHV4U3RvcmVOYW1lOiAoX3BvbGFyQ2hhcnRQcm9wcyRpZCA9IHBvbGFyQ2hhcnRQcm9wcy5pZCkgIT09IG51bGwgJiYgX3BvbGFyQ2hhcnRQcm9wcyRpZCAhPT0gdm9pZCAwID8gX3BvbGFyQ2hhcnRQcm9wcyRpZCA6IGNoYXJ0TmFtZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaGFydERhdGFDb250ZXh0UHJvdmlkZXIsIHtcbiAgICBjaGFydERhdGE6IHBvbGFyQ2hhcnRQcm9wcy5kYXRhXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXBvcnRNYWluQ2hhcnRQcm9wcywge1xuICAgIGxheW91dDogbGF5b3V0LFxuICAgIG1hcmdpbjogcG9sYXJDaGFydFByb3BzLm1hcmdpblxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVwb3J0RXZlbnRTZXR0aW5ncywge1xuICAgIHRocm90dGxlRGVsYXk6IHBvbGFyQ2hhcnRQcm9wcy50aHJvdHRsZURlbGF5LFxuICAgIHRocm90dGxlZEV2ZW50czogcG9sYXJDaGFydFByb3BzLnRocm90dGxlZEV2ZW50c1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVwb3J0Q2hhcnRQcm9wcywge1xuICAgIGJhc2VWYWx1ZTogdW5kZWZpbmVkLFxuICAgIGFjY2Vzc2liaWxpdHlMYXllcjogcG9sYXJDaGFydFByb3BzLmFjY2Vzc2liaWxpdHlMYXllcixcbiAgICBiYXJDYXRlZ29yeUdhcDogcG9sYXJDaGFydFByb3BzLmJhckNhdGVnb3J5R2FwLFxuICAgIG1heEJhclNpemU6IHBvbGFyQ2hhcnRQcm9wcy5tYXhCYXJTaXplLFxuICAgIHN0YWNrT2Zmc2V0OiBwb2xhckNoYXJ0UHJvcHMuc3RhY2tPZmZzZXQsXG4gICAgYmFyR2FwOiBwb2xhckNoYXJ0UHJvcHMuYmFyR2FwLFxuICAgIGJhclNpemU6IHBvbGFyQ2hhcnRQcm9wcy5iYXJTaXplLFxuICAgIHN5bmNJZDogcG9sYXJDaGFydFByb3BzLnN5bmNJZCxcbiAgICBzeW5jTWV0aG9kOiBwb2xhckNoYXJ0UHJvcHMuc3luY01ldGhvZCxcbiAgICBjbGFzc05hbWU6IHBvbGFyQ2hhcnRQcm9wcy5jbGFzc05hbWUsXG4gICAgcmV2ZXJzZVN0YWNrT3JkZXI6IHBvbGFyQ2hhcnRQcm9wcy5yZXZlcnNlU3RhY2tPcmRlclxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVwb3J0UG9sYXJPcHRpb25zLCB7XG4gICAgY3g6IHBvbGFyQ2hhcnRQcm9wcy5jeCxcbiAgICBjeTogcG9sYXJDaGFydFByb3BzLmN5LFxuICAgIHN0YXJ0QW5nbGU6IHBvbGFyQ2hhcnRQcm9wcy5zdGFydEFuZ2xlLFxuICAgIGVuZEFuZ2xlOiBwb2xhckNoYXJ0UHJvcHMuZW5kQW5nbGUsXG4gICAgaW5uZXJSYWRpdXM6IHBvbGFyQ2hhcnRQcm9wcy5pbm5lclJhZGl1cyxcbiAgICBvdXRlclJhZGl1czogcG9sYXJDaGFydFByb3BzLm91dGVyUmFkaXVzXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDYXRlZ29yaWNhbENoYXJ0LCBfZXh0ZW5kcyh7fSwgb3RoZXJDYXRlZ29yaWNhbFByb3BzLCB7XG4gICAgcmVmOiByZWZcbiAgfSkpKTtcbn0pOyIsImZ1bmN0aW9uIG93bktleXMoZSwgcikgeyB2YXIgdCA9IE9iamVjdC5rZXlzKGUpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7IHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlOyB9KSksIHQucHVzaC5hcHBseSh0LCBvKTsgfSByZXR1cm4gdDsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZChlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpOyB9KTsgfSByZXR1cm4gZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHsgcmV0dXJuIChyID0gX3RvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgeyB2YWx1ZTogdCwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCB9KSA6IGVbcl0gPSB0LCBlOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSB0eXBlb2YgaSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFycmF5VG9vbHRpcFNlYXJjaGVyIH0gZnJvbSAnLi4vc3RhdGUvb3B0aW9uc1NsaWNlJztcbmltcG9ydCB7IGRlZmF1bHRQb2xhckNoYXJ0UHJvcHMsIFBvbGFyQ2hhcnQgfSBmcm9tICcuL1BvbGFyQ2hhcnQnO1xuaW1wb3J0IHsgcmVzb2x2ZURlZmF1bHRQcm9wcyB9IGZyb20gJy4uL3V0aWwvcmVzb2x2ZURlZmF1bHRQcm9wcyc7XG52YXIgYWxsb3dlZFRvb2x0aXBUeXBlcyA9IFsnaXRlbSddO1xuZXhwb3J0IHZhciBkZWZhdWx0UGllQ2hhcnRQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdFBvbGFyQ2hhcnRQcm9wcyksIHt9LCB7XG4gIGxheW91dDogJ2NlbnRyaWMnLFxuICBzdGFydEFuZ2xlOiAwLFxuICBlbmRBbmdsZTogMzYwXG59KTtcblxuLyoqXG4gKiBAY29uc3VtZXMgUmVzcG9uc2l2ZUNvbnRhaW5lckNvbnRleHRcbiAqIEBwcm92aWRlcyBQb2xhclZpZXdCb3hDb250ZXh0XG4gKiBAcHJvdmlkZXMgUG9sYXJDaGFydENvbnRleHRcbiAqL1xuZXhwb3J0IHZhciBQaWVDaGFydCA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciBwcm9wc1dpdGhEZWZhdWx0cyA9IHJlc29sdmVEZWZhdWx0UHJvcHMocHJvcHMsIGRlZmF1bHRQaWVDaGFydFByb3BzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBvbGFyQ2hhcnQsIHtcbiAgICBjaGFydE5hbWU6IFwiUGllQ2hhcnRcIixcbiAgICBkZWZhdWx0VG9vbHRpcEV2ZW50VHlwZTogXCJpdGVtXCIsXG4gICAgdmFsaWRhdGVUb29sdGlwRXZlbnRUeXBlczogYWxsb3dlZFRvb2x0aXBUeXBlcyxcbiAgICB0b29sdGlwUGF5bG9hZFNlYXJjaGVyOiBhcnJheVRvb2x0aXBTZWFyY2hlcixcbiAgICBjYXRlZ29yaWNhbENoYXJ0UHJvcHM6IHByb3BzV2l0aERlZmF1bHRzLFxuICAgIHJlZjogcmVmXG4gIH0pO1xufSk7IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXJlYUNoYXJ0LCBBcmVhLCBCYXJDaGFydCwgQmFyLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIFJlc3BvbnNpdmVDb250YWluZXIsIFBpZUNoYXJ0LCBQaWUsIENlbGwgfSBmcm9tICdyZWNoYXJ0cydcbmltcG9ydCB7IHNhbGVzRGF0YSwgY2F0ZWdvcnlSZXZlbnVlLCBhZG1pbk9yZGVycywgYWRtaW5WZW5kb3JzLCBhbGVydHMgfSBmcm9tICcuLi9hZG1pbkRhdGEnXG5pbXBvcnQgdHlwZSB7IEFkbWluU2VjdGlvbiB9IGZyb20gJy4uL2FkbWluRGF0YSdcbmltcG9ydCB7IGdldEFkbWluRGFzaGJvYXJkU3VtbWFyeSwgdHlwZSBBZG1pbkRhc2hib2FyZFN1bW1hcnkgfSBmcm9tICdAL2FwaS9tYXJrZXRwbGFjZSdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICdAL3N0YXRlL3Nlc3Npb24tc3RvcmUnXG5cbnR5cGUgUHJvcHMgPSB7IG9uTmF2aWdhdGU6IChzOiBBZG1pblNlY3Rpb24pID0+IHZvaWQgfVxuXG5jb25zdCBmYWxsYmFja0twaXMgPSBbXG4gIHsgbGFiZWw6ICdHcm9zcyBTYWxlcycsIHZhbHVlOiAnJDI4NCw4MTknLCBjaGFuZ2U6ICcrMTguNCUnLCB1cDogdHJ1ZSwgc3ViOiAndnMgbGFzdCAzMCBkYXlzJywgY29sb3I6ICcjRTg0NTBBJyB9LFxuICB7IGxhYmVsOiAnTmV0IFJldmVudWUnLCB2YWx1ZTogJyQyNDEsMjg0JywgY2hhbmdlOiAnKzEyLjElJywgdXA6IHRydWUsIHN1YjogJ2FmdGVyIGNvbW1pc3Npb25zJywgY29sb3I6ICcjMDU5NjY5JyB9LFxuICB7IGxhYmVsOiAnVG90YWwgT3JkZXJzJywgdmFsdWU6ICc4LDQyOScsIGNoYW5nZTogJysyMi44JScsIHVwOiB0cnVlLCBzdWI6ICcyODQgdG9kYXknLCBjb2xvcjogJyM2MzY2RjEnIH0sXG4gIHsgbGFiZWw6ICdOZXcgQ3VzdG9tZXJzJywgdmFsdWU6ICcxLDg0MicsIGNoYW5nZTogJys5LjQlJywgdXA6IHRydWUsIHN1YjogJzQ4IHRvZGF5JywgY29sb3I6ICcjRjU5RTBCJyB9LFxuICB7IGxhYmVsOiAnQWN0aXZlIFZlbmRvcnMnLCB2YWx1ZTogJzE0MicsIGNoYW5nZTogJys0LjIlJywgdXA6IHRydWUsIHN1YjogJzMgcGVuZGluZyByZXZpZXcnLCBjb2xvcjogJyNFQzQ4OTknIH0sXG4gIHsgbGFiZWw6ICdQcm9kdWN0cyBMaXN0ZWQnLCB2YWx1ZTogJzI4LDQ5MCcsIGNoYW5nZTogJys2LjglJywgdXA6IHRydWUsIHN1YjogJzE4NCBuZXcgdGhpcyB3ZWVrJywgY29sb3I6ICcjMTRCOEE2JyB9LFxuICB7IGxhYmVsOiAnQXZnIE9yZGVyIFZhbHVlJywgdmFsdWU6ICckMTQ3LjIwJywgY2hhbmdlOiAnLTIuMSUnLCB1cDogZmFsc2UsIHN1YjogJ3ZzICQxNTAuNDIgbGFzdCBtb250aCcsIGNvbG9yOiAnIzhCNUNGNicgfSxcbiAgeyBsYWJlbDogJ0NvbnZlcnNpb24gUmF0ZScsIHZhbHVlOiAnMy40MiUnLCBjaGFuZ2U6ICcrMC4xOCUnLCB1cDogdHJ1ZSwgc3ViOiAnZnJvbSAzLjI0JSBsYXN0IG1vbnRoJywgY29sb3I6ICcjRTg0NTBBJyB9LFxuXVxuXG5jb25zdCBTVEFUVVNfQ09MT1JTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBkZWxpdmVyZWQ6ICdiZy1bI0QxRkFFNV0gdGV4dC1bIzA2NUY0Nl0nLFxuICBzaGlwcGVkOiAnYmctWyNEQkVBRkVdIHRleHQtWyMxRTQwQUZdJyxcbiAgcHJvY2Vzc2luZzogJ2JnLVsjRkVGM0M3XSB0ZXh0LVsjOTI0MDBFXScsXG4gIHBlbmRpbmc6ICdiZy1bI0Y0RjRGOF0gdGV4dC1bIzVCNUI3Ml0nLFxuICBjYW5jZWxsZWQ6ICdiZy1bI0ZFRTJFMl0gdGV4dC1bIzk5MUIxQl0nLFxuICByZWZ1bmRfcGVuZGluZzogJ2JnLVsjRkVGM0M3XSB0ZXh0LVsjOTI0MDBFXScsXG59XG5cbmNvbnN0IERBVEVfRklMVEVSUyA9IFsnVG9kYXknLCAnNyBEYXlzJywgJzMwIERheXMnLCAnOTAgRGF5cycsICdUaGlzIFllYXInLCAnQ3VzdG9tJ11cblxuY29uc3QgQ0hBUlRfQ09MT1JTID0gWycjRTg0NTBBJywgJyM2MzY2RjEnLCAnIzA1OTY2OScsICcjRjU5RTBCJywgJyNFQzQ4OTknLCAnIzE0QjhBNiddXG5cbmZ1bmN0aW9uIGJ1aWxkS3BpcyhzdW1tYXJ5OiBBZG1pbkRhc2hib2FyZFN1bW1hcnlbJ3N1bW1hcnknXSkge1xuICByZXR1cm4gW1xuICAgIHsgbGFiZWw6ICdHcm9zcyBTYWxlcycsIHZhbHVlOiBgJCR7c3VtbWFyeS5ncm9zc1NhbGVzLnRvTG9jYWxlU3RyaW5nKCl9YCwgY2hhbmdlOiAnKzAuMCUnLCB1cDogdHJ1ZSwgc3ViOiAnbGl2ZSBmcm9tIGJhY2tlbmQnLCBjb2xvcjogJyNFODQ1MEEnIH0sXG4gICAgeyBsYWJlbDogJ05ldCBSZXZlbnVlJywgdmFsdWU6IGAkJHtzdW1tYXJ5Lm5ldFNhbGVzLnRvTG9jYWxlU3RyaW5nKCl9YCwgY2hhbmdlOiAnKzAuMCUnLCB1cDogdHJ1ZSwgc3ViOiAnbGl2ZSBmcm9tIGJhY2tlbmQnLCBjb2xvcjogJyMwNTk2NjknIH0sXG4gICAgeyBsYWJlbDogJ1RvdGFsIE9yZGVycycsIHZhbHVlOiBzdW1tYXJ5Lm9yZGVycy50b0xvY2FsZVN0cmluZygpLCBjaGFuZ2U6ICcrMC4wJScsIHVwOiB0cnVlLCBzdWI6ICdsaXZlIGZyb20gYmFja2VuZCcsIGNvbG9yOiAnIzYzNjZGMScgfSxcbiAgICB7IGxhYmVsOiAnTmV3IEN1c3RvbWVycycsIHZhbHVlOiBzdW1tYXJ5LmN1c3RvbWVycy50b0xvY2FsZVN0cmluZygpLCBjaGFuZ2U6ICcrMC4wJScsIHVwOiB0cnVlLCBzdWI6ICdsaXZlIGZyb20gYmFja2VuZCcsIGNvbG9yOiAnI0Y1OUUwQicgfSxcbiAgICB7IGxhYmVsOiAnQWN0aXZlIFZlbmRvcnMnLCB2YWx1ZTogc3VtbWFyeS52ZW5kb3JzLnRvTG9jYWxlU3RyaW5nKCksIGNoYW5nZTogJyswLjAlJywgdXA6IHRydWUsIHN1YjogJ2xpdmUgZnJvbSBiYWNrZW5kJywgY29sb3I6ICcjRUM0ODk5JyB9LFxuICAgIHsgbGFiZWw6ICdQcm9kdWN0cyBMaXN0ZWQnLCB2YWx1ZTogc3VtbWFyeS5wcm9kdWN0cy50b0xvY2FsZVN0cmluZygpLCBjaGFuZ2U6ICcrMC4wJScsIHVwOiB0cnVlLCBzdWI6ICdsaXZlIGZyb20gYmFja2VuZCcsIGNvbG9yOiAnIzE0QjhBNicgfSxcbiAgICB7IGxhYmVsOiAnQXZnIE9yZGVyIFZhbHVlJywgdmFsdWU6IGAkJHtzdW1tYXJ5LmF2ZXJhZ2VPcmRlclZhbHVlLnRvRml4ZWQoMil9YCwgY2hhbmdlOiAnKzAuMCUnLCB1cDogdHJ1ZSwgc3ViOiAnbGl2ZSBmcm9tIGJhY2tlbmQnLCBjb2xvcjogJyM4QjVDRjYnIH0sXG4gICAgeyBsYWJlbDogJ0NvbnZlcnNpb24gUmF0ZScsIHZhbHVlOiBgJHtzdW1tYXJ5LmNvbnZlcnNpb25SYXRlLnRvRml4ZWQoMil9JWAsIGNoYW5nZTogJyswLjAlJywgdXA6IHRydWUsIHN1YjogJ2xpdmUgZnJvbSBiYWNrZW5kJywgY29sb3I6ICcjRTg0NTBBJyB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluRGFzaGJvYXJkKHsgb25OYXZpZ2F0ZSB9OiBQcm9wcykge1xuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpXG4gIGNvbnN0IFtkYXRlRmlsdGVyLCBzZXREYXRlRmlsdGVyXSA9IHVzZVN0YXRlKCczMCBEYXlzJylcbiAgY29uc3QgW2NoYXJ0VGFiLCBzZXRDaGFydFRhYl0gPSB1c2VTdGF0ZTwncmV2ZW51ZScgfCAnb3JkZXJzJz4oJ3JldmVudWUnKVxuICBjb25zdCBbbGl2ZURhdGEsIHNldExpdmVEYXRhXSA9IHVzZVN0YXRlPEFkbWluRGFzaGJvYXJkU3VtbWFyeSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtsaXZlRXJyb3IsIHNldExpdmVFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlc3Npb24uc3RhdHVzICE9PSAnYXV0aGVudGljYXRlZCcgfHwgIXNlc3Npb24udG9rZW4pIHtcbiAgICAgIHNldExpdmVEYXRhKG51bGwpXG4gICAgICBzZXRMaXZlRXJyb3IobnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgdm9pZCAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRBZG1pbkRhc2hib2FyZFN1bW1hcnkoc2Vzc2lvbi50b2tlbiEpXG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVyblxuXG4gICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgc2V0TGl2ZUVycm9yKHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpXG4gICAgICAgIHNldExpdmVEYXRhKG51bGwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzZXRMaXZlRXJyb3IobnVsbClcbiAgICAgIHNldExpdmVEYXRhKHJlc3BvbnNlLmRhdGEpXG4gICAgfSkoKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gIH0sIFtzZXNzaW9uLnN0YXR1cywgc2Vzc2lvbi50b2tlbl0pXG5cbiAgY29uc3QgZGFzaGJvYXJkID0gbGl2ZURhdGFcbiAgY29uc3QgZGlzcGxheUtwaXMgPSBkYXNoYm9hcmQgPyBidWlsZEtwaXMoZGFzaGJvYXJkLnN1bW1hcnkpIDogZmFsbGJhY2tLcGlzXG4gIGNvbnN0IGRpc3BsYXlBbGVydHMgPSBkYXNoYm9hcmQ/LmFsZXJ0cyA/PyBhbGVydHNcbiAgY29uc3QgZGlzcGxheVNhbGVzID0gZGFzaGJvYXJkPy5zYWxlcyA/PyBzYWxlc0RhdGFcbiAgY29uc3QgZGlzcGxheUNhdGVnb3J5UmV2ZW51ZSA9IGRhc2hib2FyZD8uY2F0ZWdvcnlSZXZlbnVlID8/IGNhdGVnb3J5UmV2ZW51ZVxuICBjb25zdCBkaXNwbGF5T3JkZXJzID0gZGFzaGJvYXJkPy5yZWNlbnRPcmRlcnMgPz8gYWRtaW5PcmRlcnNcbiAgY29uc3QgZGlzcGxheVBlbmRpbmdWZW5kb3JzID1cbiAgICBkYXNoYm9hcmQ/LnBlbmRpbmdWZW5kb3JzID8/XG4gICAgYWRtaW5WZW5kb3JzLmZpbHRlcih2ID0+IHYuc3RhdHVzID09PSAncGVuZGluZycgfHwgdi5zdGF0dXMgPT09ICdyZXZpZXcnKVxuICBjb25zdCBkaXNwbGF5TG93U3RvY2tQcm9kdWN0cyA9XG4gICAgZGFzaGJvYXJkPy5sb3dTdG9ja1Byb2R1Y3RzID8/XG4gICAgW1xuICAgICAgeyBpZDogJ3NueS13aDUnLCB0aXRsZTogJ1NvbnkgV0gtMTAwMFhNNScsIHN0b2NrOiAzLCB2ZW5kb3JJZDogJ3YxJyB9LFxuICAgICAgeyBpZDogJ3RvZC1oYTJiNScsIHRpdGxlOiAnVGhlIE9yZGluYXJ5IEhBIDIlJywgc3RvY2s6IDksIHZlbmRvcklkOiAndjUnIH0sXG4gICAgICB7IGlkOiAnYXBsLW1iYS1tMycsIHRpdGxlOiAnTWFjQm9vayBBaXIgTTMnLCBzdG9jazogMzIsIHZlbmRvcklkOiAndjMnIH0sXG4gICAgXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgc3BhY2UteS02XCI+XG5cbiAgICAgIHsvKiBQYWdlIGhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjMTExMTE4XVwiPkRhc2hib2FyZDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNkI2QjgyXSBtdC0wLjVcIj5cbiAgICAgICAgICAgIHtzZXNzaW9uLnVzZXIgPyBgV2VsY29tZSBiYWNrLCAke3Nlc3Npb24udXNlci5mdWxsTmFtZX0uIEhlcmUgaXMgd2hhdCBpcyBoYXBwZW5pbmcuYCA6IFwiV2VsY29tZSBiYWNrLiBIZXJlJ3Mgd2hhdCdzIGhhcHBlbmluZy5cIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAge0RBVEVfRklMVEVSUy5tYXAoZiA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGtleT17Zn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGF0ZUZpbHRlcihmKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xLjUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICBkYXRlRmlsdGVyID09PSBmID8gJ2JnLVsjRTg0NTBBXSB0ZXh0LXdoaXRlJyA6ICdiZy13aGl0ZSBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSB0ZXh0LVsjNkI2QjgyXSBob3Zlcjpib3JkZXItWyMxMTExMThdJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Z9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEFsZXJ0cyAqL31cbiAgICAgIHtkaXNwbGF5QWxlcnRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC01IHB5LTMgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1bI0UxMUQ0OF0gYW5pbWF0ZS1wdWxzZVwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5BY3Rpb24gUmVxdWlyZWQ8L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJnLVsjRkVFMkUyXSB0ZXh0LVsjOTkxQjFCXSBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgZm9udC1ib2xkXCI+e2Rpc3BsYXlBbGVydHMubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3cteC1hdXRvIHNjcm9sbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtkaXNwbGF5QWxlcnRzLm1hcCgoYSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zIHB4LTUgcHktMyBib3JkZXItciBib3JkZXItWyNGNEY0RjhdIG1pbi13LVsyNjBweF0gJHtpID09PSAwID8gJycgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMiBoLTIgcm91bmRlZC1mdWxsIG10LTEuNSBmbGV4LXNocmluay0wICR7YS50eXBlID09PSAnZXJyb3InID8gJ2JnLVsjRTExRDQ4XScgOiBhLnR5cGUgPT09ICd3YXJuaW5nJyA/ICdiZy1bI0Q5NzcwNl0nIDogJ2JnLVsjM0I4MkY2XSd9YH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1bIzExMTExOF1cIj57YS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjRTg0NTBBXSBmb250LXNlbWlib2xkIG10LTAuNSBob3Zlcjp0ZXh0LVsjQzkzQTA3XVwiPnthLmFjdGlvbn08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogS1BJIENhcmRzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgIHtkaXNwbGF5S3Bpcy5tYXAoayA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2subGFiZWx9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gcC01IGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLXNoYWRvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj57ay5sYWJlbH08L3A+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQteHMgZm9udC1ib2xkIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCAke2sudXAgPyAnYmctWyNEMUZBRTVdIHRleHQtWyMwNjVGNDZdJyA6ICdiZy1bI0ZFRTJFMl0gdGV4dC1bIzk5MUIxQl0nfWB9PlxuICAgICAgICAgICAgICAgIHtrLnVwID8gJ+KGkScgOiAn4oaTJ30ge2suY2hhbmdlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJsYWNrIHRleHQtMnhsIHRleHQtWyMxMTExMThdIG10LTIgdHJhY2tpbmctdGlnaHRcIj57ay52YWx1ZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIG10LTFcIj57ay5zdWJ9PC9wPlxuICAgICAgICAgICAgey8qIFNwYXJrbGluZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBoLThcIj5cbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMTAwIDMyXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICA8cG9seWxpbmVcbiAgICAgICAgICAgICAgICAgIHBvaW50cz1cIjAsMjggMTAsMjIgMjAsMjQgMzAsMTggNDAsMjAgNTAsMTQgNjAsMTYgNzAsMTAgODAsMTIgOTAsOCAxMDAsNlwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9e2suY29sb3J9XG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cG9seWxpbmVcbiAgICAgICAgICAgICAgICAgIHBvaW50cz1cIjAsMzIgMCwyOCAxMCwyMiAyMCwyNCAzMCwxOCA0MCwyMCA1MCwxNCA2MCwxNiA3MCwxMCA4MCwxMiA5MCw4IDEwMCw2IDEwMCwzMlwiXG4gICAgICAgICAgICAgICAgICBmaWxsPXtrLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9XCIwLjA4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTWFpbiBjaGFydCArIGNhdGVnb3J5IGJyZWFrZG93biAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICB7LyogU2FsZXMgY2hhcnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMiBiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+U2FsZXMgT3ZlcnZpZXc8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIG10LTAuNVwiPjEyLXdlZWsgdHJlbmQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICB7KFsncmV2ZW51ZScsICdvcmRlcnMnXSBhcyBjb25zdCkubWFwKHQgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17dH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENoYXJ0VGFiKHQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIGNhcGl0YWxpemUgdHJhbnNpdGlvbi1jb2xvcnMgJHtjaGFydFRhYiA9PT0gdCA/ICdiZy1bIzBGMEYxOF0gdGV4dC13aGl0ZScgOiAndGV4dC1bIzZCNkI4Ml0gaG92ZXI6YmctWyNGNEY0RjhdJ31gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MjIwfT5cbiAgICAgICAgICAgICAgPEFyZWFDaGFydCBkYXRhPXtkaXNwbGF5U2FsZXN9IG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAxMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH19PlxuICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJhcmVhR3JhZGllbnRcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjBcIiB5Mj1cIjFcIj5cbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiI0U4NDUwQVwiIHN0b3BPcGFjaXR5PXswLjE4fSAvPlxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiNFODQ1MEFcIiBzdG9wT3BhY2l0eT17MH0gLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiNGNEY0RjhcIiB2ZXJ0aWNhbD17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwiZGF0ZVwiIHRpY2s9e3sgZm9udFNpemU6IDExLCBmaWxsOiAnIzlCOUJCOCcgfX0gYXhpc0xpbmU9e2ZhbHNlfSB0aWNrTGluZT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgIDxZQXhpcyB0aWNrPXt7IGZvbnRTaXplOiAxMSwgZmlsbDogJyM5QjlCQjgnIH19IGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXR0ZXI9e3YgPT4gY2hhcnRUYWIgPT09ICdyZXZlbnVlJyA/IGAkJHsodi8xMDAwKS50b0ZpeGVkKDApfWtgIDogU3RyaW5nKHYpfSAvPlxuICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2ZmZicsIGJvcmRlcjogJzFweCBzb2xpZCAjRTJFMkVDJywgYm9yZGVyUmFkaXVzOiAnMTBweCcsIGZvbnRTaXplOiAxMiB9fVxuICAgICAgICAgICAgICAgIGxhYmVsU3R5bGU9e3sgY29sb3I6ICcjMTExMTE4JywgZm9udFdlaWdodDogNjAwIH19XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyPXsodjogdW5rbm93bikgPT4geyBjb25zdCBuID0gTnVtYmVyKHYpOyByZXR1cm4gY2hhcnRUYWIgPT09ICdyZXZlbnVlJyA/IFtgJCR7bi50b0xvY2FsZVN0cmluZygpfWAsICdSZXZlbnVlJ10gOiBbbi50b0xvY2FsZVN0cmluZygpLCAnT3JkZXJzJ10gfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEFyZWFcbiAgICAgICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgICAgICAgIGRhdGFLZXk9e2NoYXJ0VGFiID09PSAncmV2ZW51ZScgPyAncmV2ZW51ZScgOiAnb3JkZXJzJ31cbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjRTg0NTBBXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mi41fVxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2FyZWFHcmFkaWVudClcIlxuICAgICAgICAgICAgICAgIGRvdD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgYWN0aXZlRG90PXt7IHI6IDUsIGZpbGw6ICcjRTg0NTBBJywgc3Ryb2tlV2lkdGg6IDAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQXJlYUNoYXJ0PlxuICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENhdGVnb3J5IGJyZWFrZG93biAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIHAtNVwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIG1iLTFcIj5SZXZlbnVlIGJ5IENhdGVnb3J5PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdIG1iLTRcIj5MYXN0IDMwIGRheXM8L3A+XG4gICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXsxNjB9PlxuICAgICAgICAgICAgPFBpZUNoYXJ0PlxuICAgICAgICAgICAgICA8UGllIGRhdGE9e2Rpc3BsYXlDYXRlZ29yeVJldmVudWV9IGRhdGFLZXk9XCJ2YWx1ZVwiIG5hbWVLZXk9XCJuYW1lXCIgY3g9XCI1MCVcIiBjeT1cIjUwJVwiIG91dGVyUmFkaXVzPXs3MH0gaW5uZXJSYWRpdXM9ezQwfT5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheUNhdGVnb3J5UmV2ZW51ZS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDZWxsIGtleT17aX0gZmlsbD17Q0hBUlRfQ09MT1JTW2kgJSBDSEFSVF9DT0xPUlMubGVuZ3RoXX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9QaWU+XG4gICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmJywgYm9yZGVyOiAnMXB4IHNvbGlkICNFMkUyRUMnLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBmb250U2l6ZTogMTIgfX1cbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXI9eyh2OiB1bmtub3duKSA9PiBbYCQkeyhOdW1iZXIodikvMTAwMCkudG9GaXhlZCgwKX1rYCwgJyddfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QaWVDaGFydD5cbiAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgbXQtMlwiPlxuICAgICAgICAgICAge2Rpc3BsYXlDYXRlZ29yeVJldmVudWUubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjLm5hbWV9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLjUgaC0yLjUgcm91bmRlZC1mdWxsIGZsZXgtc2hyaW5rLTBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBDSEFSVF9DT0xPUlNbaSAlIENIQVJUX0NPTE9SUy5sZW5ndGhdIH19IC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM2QjZCODJdXCI+e2MubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1vbm8gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPiR7KGMudmFsdWUgLyAxMDAwKS50b0ZpeGVkKDApfWs8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBCb3R0b20gcm93OiBSZWNlbnQgb3JkZXJzICsgVmVuZG9yIGFwcHJvdmFscyArIExvdyBzdG9jayAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuXG4gICAgICAgIHsvKiBSZWNlbnQgT3JkZXJzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTIgYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC01IHB5LTQgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bIzExMTExOF1cIj5SZWNlbnQgT3JkZXJzPC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSgnb3JkZXJzJyl9IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjRTg0NTBBXSBob3Zlcjp0ZXh0LVsjQzkzQTA3XVwiPlZpZXcgYWxsIOKGkjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1bI0Y5RjlGQ11cIj5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNSBweS0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPk9yZGVyPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNCBweS0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPkN1c3RvbWVyPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHgtNCBweS0zIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjOUI5QkI4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPkFtb3VudDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB4LTQgcHktMyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzlCOUJCOF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtWyNGNEY0RjhdXCI+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXlPcmRlcnMuc2xpY2UoMCwgNikubWFwKG8gPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17by5pZH0gY2xhc3NOYW1lPVwiaG92ZXI6YmctWyNGOUY5RkNdIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdXCI+e28uaWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtWyM5QjlCQjhdIG10LTAuNVwiPntvLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC14cyB0ZXh0LVsjMTExMTE4XVwiPntvLmN1c3RvbWVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVsjOUI5QkI4XVwiPntvLnZlbmRvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc20gdGV4dC1bIzExMTExOF1cIj4ke28uYW1vdW50LnRvTG9jYWxlU3RyaW5nKCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkICR7U1RBVFVTX0NPTE9SU1tvLnN0YXR1c119YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7by5zdGF0dXMucmVwbGFjZSgnXycsICcgJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBSaWdodCBjb2x1bW46IFZlbmRvciBhcHByb3ZhbHMgKyBTdG9jayBhbGVydHMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgey8qIFBlbmRpbmcgdmVuZG9yIGFwcHJvdmFscyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bI0UyRTJFQ10gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHB5LTMgYm9yZGVyLWIgYm9yZGVyLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNtIHRleHQtWyMxMTExMThdXCI+UGVuZGluZyBWZW5kb3JzPC9oMz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbk5hdmlnYXRlKCd2ZW5kb3JzLWFwcGxpY2F0aW9ucycpfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bI0U4NDUwQV1cIj5SZXZpZXcg4oaSPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICB7ZGlzcGxheVBlbmRpbmdWZW5kb3JzLm1hcCh2ID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17di5pZH0gY2xhc3NOYW1lPVwicHgtNCBweS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XSB0cnVuY2F0ZVwiPnt2Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyM5QjlCQjhdXCI+e3Yub3duZXJ9IMK3IHt2LmpvaW5lZH08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy03IGgtNyByb3VuZGVkLWxnIGJnLVsjRDFGQUU1XSB0ZXh0LVsjMDU5NjY5XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1bI0E3RjNEMF0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezIuNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk01IDEzbDQgNEwxOSA3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy03IGgtNyByb3VuZGVkLWxnIGJnLVsjRkVFMkUyXSB0ZXh0LVsjRTExRDQ4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1bI0ZFQ0FDQV0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezIuNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBMb3cgc3RvY2sgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyNFMkUyRUNdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS0zIGJvcmRlci1iIGJvcmRlci1bI0Y0RjRGOF1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc20gdGV4dC1bIzExMTExOF1cIj5Mb3cgU3RvY2s8L2gzPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgYmctWyNGRUYzQzddIHRleHQtWyM5MjQwMEVdIHB4LTEuNSBweS0wLjUgcm91bmRlZC1mdWxsIGZvbnQtYm9sZFwiPjU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoJ2ludmVudG9yeScpfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bI0U4NDUwQV1cIj5NYW5hZ2Ug4oaSPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLVsjRjRGNEY4XVwiPlxuICAgICAgICAgICAgICB7ZGlzcGxheUxvd1N0b2NrUHJvZHVjdHMubWFwKHAgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwLmlkfSBjbGFzc05hbWU9XCJweC00IHB5LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyMxMTExMThdIHRydW5jYXRlXCI+e3AudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVsjOUI5QkI4XSBmb250LW1vbm9cIj57cC52ZW5kb3JJZH08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1zbSBweC0yIHB5LTAuNSByb3VuZGVkLWxnICR7cC5zdG9jayA8IDEwID8gJ2JnLVsjRkVFMkUyXSB0ZXh0LVsjRTExRDQ4XScgOiAnYmctWyNGRUYzQzddIHRleHQtWyNEOTc3MDZdJ31gfT5cbiAgICAgICAgICAgICAgICAgICAge3Auc3RvY2t9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUGVuZGluZyBwYXlvdXRzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMwRjBGMThdIHJvdW5kZWQteGwgcC00IHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1bIzVCNUI3Ml0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlBlbmRpbmcgUGF5b3V0czwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJsYWNrIHRleHQtM3hsIHRleHQtd2hpdGVcIj4kMjQxLDgwMDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bIzVCNUI3Ml1cIj5cbiAgICAgICAgICAgICAge2Rhc2hib2FyZCA/IGBhY3Jvc3MgJHtkaXNwbGF5UGVuZGluZ1ZlbmRvcnMubGVuZ3RofSB2ZW5kb3JzIMK3IExpdmUgZnJvbSBiYWNrZW5kYCA6ICdhY3Jvc3MgMjggdmVuZG9ycyDCtyBOZXh0IGJhdGNoIEp1bCAyOCd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoJ2ZpbmFuY2UnKX0gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgYmctWyNFODQ1MEFdIHRleHQtd2hpdGUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctWyNDOTNBMDddIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgIFByb2Nlc3MgUGF5b3V0c1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBPcmRlcnMgYnkgc3RhdHVzIGJhciBjaGFydCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjRTJFMkVDXSBwLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsjMTExMTE4XVwiPk9yZGVycyBieSBWb2x1bWU8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjOUI5QkI4XSBtdC0wLjVcIj5XZWVrbHkgb3JkZXIgY291bnQgYnJlYWtkb3duPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXsxODB9PlxuICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtkaXNwbGF5U2FsZXMuc2xpY2UoLTgpfSBtYXJnaW49e3sgdG9wOiAwLCByaWdodDogMTAsIGJvdHRvbTogMCwgbGVmdDogMCB9fT5cbiAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiNGNEY0RjhcIiB2ZXJ0aWNhbD17ZmFsc2V9IC8+XG4gICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cImRhdGVcIiB0aWNrPXt7IGZvbnRTaXplOiAxMSwgZmlsbDogJyM5QjlCQjgnIH19IGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPFlBeGlzIHRpY2s9e3sgZm9udFNpemU6IDExLCBmaWxsOiAnIzlCOUJCOCcgfX0gYXhpc0xpbmU9e2ZhbHNlfSB0aWNrTGluZT17ZmFsc2V9IC8+XG4gICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYnLCBib3JkZXI6ICcxcHggc29saWQgI0UyRTJFQycsIGJvcmRlclJhZGl1czogJzEwcHgnLCBmb250U2l6ZTogMTIgfX1cbiAgICAgICAgICAgICAgY3Vyc29yPXt7IGZpbGw6ICcjRjRGNEY4JyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cIm9yZGVyc1wiIGZpbGw9XCIjRTg0NTBBXCIgcmFkaXVzPXtbNCwgNCwgMCwgMF19IC8+XG4gICAgICAgICAgPC9CYXJDaGFydD5cbiAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNV0sIm1hcHBpbmdzIjoiOzs7O0FBU0EsSUFBVyw4QkFBNkIsVUFBUyxNQUFNLGVBQWU7QUFDdEUsSUFBSSxzQkFBc0IsZUFBZSxDQUFDLGNBQWMsVUFBVSxHQUFHLGlCQUFpQjtBQUN0RixJQUFXLDJCQUEyQixlQUFlO0NBQUM7Q0FBNEI7Q0FBZ0I7QUFBbUIsR0FBRyw2QkFBNkI7QUFDckosSUFBSSxnQ0FBZ0MsZUFBZSxDQUFDLHdCQUF3QixHQUFHLHlCQUF5QjtBQUN4RyxJQUFXLDJCQUEyQixlQUFlLENBQUMsK0JBQStCLHFDQUFxQyxHQUFHLG9CQUFvQjtBQUNqSixJQUFXLDJCQUEyQixlQUFlO0NBQUM7Q0FBMEI7Q0FBZ0I7QUFBd0IsR0FBRyxvQkFBb0I7QUFDN0YsZUFBZTtDQUFDO0NBQTBCO0NBQWdCO0FBQXdCLElBQUksTUFBTSxjQUFjLFVBQVU7Q0FDcEssSUFBSSxNQUFNLFNBQVMs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