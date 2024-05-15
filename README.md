# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

<mxfile host="app.diagrams.net" modified="2024-05-15T15:54:01.970Z" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" etag="gV1MAw6n5P-yvcRP9oKF" version="24.4.0" type="github">
  <diagram name="Страница — 1" id="z3P2CDi4im3vI8IVjc8o">
    <mxGraphModel dx="4261" dy="2544" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="5842s0LLyivOS5_dFz7O-1" value="&lt;p style=&quot;margin:0px;margin-top:4px;text-align:center;&quot;&gt;&lt;i&gt;&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;/i&gt;&lt;br&gt;&lt;b&gt;ILarekApi&lt;/b&gt;&lt;/p&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;&lt;p style=&quot;margin:0px;margin-left:4px;&quot;&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;+ getList: ( ) = &amp;gt;&amp;nbsp; Promise&amp;lt;Iitem[]&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;/p&gt;&lt;p style=&quot;margin:0px;margin-left:4px;&quot;&gt;+ getItem: (id: str) =&amp;gt; Promise&amp;lt;Iitem&amp;gt;&lt;/p&gt;&lt;p style=&quot;margin:0px;margin-left:4px;&quot;&gt;+ order: (order: IOrder) =&amp;gt; Promise&amp;lt;IOrderResult&amp;gt;&lt;/p&gt;" style="verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;" vertex="1" parent="1">
          <mxGeometry x="190" y="470" width="290" height="160" as="geometry" />
        </mxCell>
        <mxCell id="5842s0LLyivOS5_dFz7O-2" value="&lt;p style=&quot;margin:0px;margin-top:4px;text-align:center;&quot;&gt;&lt;b&gt;LarekApi&lt;/b&gt;&lt;/p&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;+cdn: str;&lt;br&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;/div&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;p style=&quot;margin: 0px 0px 0px 4px;&quot;&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;+ getList: ( ) = &amp;gt;&amp;nbsp; Promise&amp;lt;Iitem[]&amp;gt;&lt;/span&gt;&lt;br&gt;&lt;/p&gt;&lt;p style=&quot;margin: 0px 0px 0px 4px;&quot;&gt;+ getItem: (id: str) =&amp;gt; Promise&amp;lt;Iitem&amp;gt;&lt;/p&gt;&lt;p style=&quot;margin: 0px 0px 0px 4px;&quot;&gt;+ order: (order: IOrder) =&amp;gt; Promise&amp;lt;IOrderResult&amp;gt;&lt;/p&gt;&lt;/div&gt;" style="verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;" vertex="1" parent="1">
          <mxGeometry x="-200" y="470" width="280" height="160" as="geometry" />
        </mxCell>
        <mxCell id="5842s0LLyivOS5_dFz7O-3" value="" style="endArrow=block;dashed=1;endFill=0;endSize=12;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="5842s0LLyivOS5_dFz7O-2" target="5842s0LLyivOS5_dFz7O-1">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="-60" y="600" as="sourcePoint" />
            <mxPoint x="100" y="600" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="5842s0LLyivOS5_dFz7O-4" value="&lt;p style=&quot;margin:0px;margin-top:4px;text-align:center;&quot;&gt;&lt;b&gt;Api&lt;/b&gt;&lt;/p&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;+baseUrl: str;&lt;div&gt;+options: RequsetInit;&lt;br&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;&lt;div style=&quot;height:2px;&quot;&gt;+ handleResponse (response: Response) =&amp;gt; Promise&amp;lt;object&amp;gt;;&lt;/div&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;+ get (uri: string) =&amp;gt; void;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;+ post (uri: string, data: object, method: ApiPostMethods) =&amp;gt; void;&lt;/div&gt;" style="verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;" vertex="1" parent="1">
          <mxGeometry x="-680" y="470" width="360" height="160" as="geometry" />
        </mxCell>
        <mxCell id="5842s0LLyivOS5_dFz7O-5" value="Extends" style="endArrow=block;endSize=16;endFill=0;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;" edge="1" parent="1" source="5842s0LLyivOS5_dFz7O-2" target="5842s0LLyivOS5_dFz7O-4">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="-200" y="580" as="sourcePoint" />
            <mxPoint x="-290" y="450" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="5842s0LLyivOS5_dFz7O-6" value="&lt;p style=&quot;margin:0px;margin-top:4px;text-align:center;&quot;&gt;&lt;i&gt;&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;/i&gt;&lt;br&gt;&lt;b&gt;IEvents&lt;/b&gt;&lt;/p&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;&lt;p style=&quot;margin:0px;margin-left:4px;&quot;&gt;+ on (events: EventName, callback: (data) =&amp;gt; void) =&amp;gt; void&lt;br&gt;+&amp;nbsp;&lt;span style=&quot;background-color: initial;&quot;&gt;emit (events: str,&amp;nbsp; data?) =&amp;gt; void&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin:0px;margin-left:4px;&quot;&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;+&amp;nbsp;&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;trigger (events: str, context) =&amp;gt; void&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin:0px;margin-left:4px;&quot;&gt;&lt;br&gt;&lt;/p&gt;" style="verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;" vertex="1" parent="1">
          <mxGeometry x="-1040" y="320" width="320" height="110" as="geometry" />
        </mxCell>
        <mxCell id="5842s0LLyivOS5_dFz7O-7" value="&lt;p style=&quot;margin:0px;margin-top:4px;text-align:center;&quot;&gt;&lt;b&gt;EventEmitter&lt;/b&gt;&lt;/p&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;&lt;div style=&quot;height:2px;&quot;&gt;+ _events: Map&amp;lt;EventName, Set&amp;lt;Subscribe&amp;gt;&amp;gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;p style=&quot;margin: 4px 0px 0px; text-align: center;&quot;&gt;&lt;/p&gt;&lt;p style=&quot;margin: 0px 0px 0px 4px;&quot;&gt;+ on (events: EventName, callback: (data) =&amp;gt; void) =&amp;gt; void&lt;br&gt;+&amp;nbsp;&lt;span style=&quot;background-color: initial;&quot;&gt;emit (events: str,&amp;nbsp; data?) =&amp;gt; void&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin: 0px 0px 0px 4px;&quot;&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;+ onAll (calllback: (event: EmitterEvent) =&amp;gt; void&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin: 0px 0px 0px 4px;&quot;&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;+ offAll () =&amp;gt; void&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin: 0px 0px 0px 4px;&quot;&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;+&amp;nbsp;&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;trigger (events: str, context) =&amp;gt; void&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin: 0px 0px 0px 4px;&quot;&gt;&lt;br&gt;&lt;/p&gt;&lt;/div&gt;" style="verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;" vertex="1" parent="1">
          <mxGeometry x="-1040" y="470" width="320" height="160" as="geometry" />
        </mxCell>
        <mxCell id="5842s0LLyivOS5_dFz7O-8" value="" style="endArrow=block;dashed=1;endFill=0;endSize=12;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;" edge="1" parent="1" source="5842s0LLyivOS5_dFz7O-7" target="5842s0LLyivOS5_dFz7O-6">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="90" y="560" as="sourcePoint" />
            <mxPoint x="200" y="560" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="5842s0LLyivOS5_dFz7O-9" value="&lt;p style=&quot;margin:0px;margin-top:4px;text-align:center;&quot;&gt;&lt;i&gt;&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;/i&gt;&lt;br/&gt;&lt;b&gt;Interface&lt;/b&gt;&lt;/p&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;/&gt;&lt;p style=&quot;margin:0px;margin-left:4px;&quot;&gt;+ field1: Type&lt;br/&gt;+ field2: Type&lt;/p&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;/&gt;&lt;p style=&quot;margin:0px;margin-left:4px;&quot;&gt;+ method1(Type): Type&lt;br/&gt;+ method2(Type, Type): Type&lt;/p&gt;" style="verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;" vertex="1" parent="1">
          <mxGeometry x="590" y="50" width="190" height="140" as="geometry" />
        </mxCell>
        <mxCell id="5842s0LLyivOS5_dFz7O-10" value="&lt;p style=&quot;margin:0px;margin-top:4px;text-align:center;&quot;&gt;&lt;b&gt;abstract class&lt;/b&gt;&lt;/p&gt;&lt;p style=&quot;margin:0px;margin-top:4px;text-align:center;&quot;&gt;&lt;b&gt;Component&lt;/b&gt;&lt;/p&gt;&lt;hr size=&quot;1&quot; style=&quot;border-style:solid;&quot;&gt;&lt;div style=&quot;height:2px;&quot;&gt;+ toggleClass (element: HTMLElement, className: str, force?:bolean) =&amp;gt; void;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;# setText (element: HtmlElement, value: unknow) =&amp;gt; void;&lt;br&gt;+ setDisabled (&lt;span style=&quot;background-color: initial;&quot;&gt;element: HtmlElement, state: bolean) =&amp;gt; void;&lt;br&gt;# setHidden (&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;element: HtmlElement&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;) =&amp;gt; void;&lt;br&gt;# setVisible (&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;element: HtmlElement) =&amp;gt; void;&lt;br&gt;# setImage (&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;element: HtmlElement) =&amp;gt; void;&lt;br&gt;+ render (data?) =&amp;gt;&amp;nbsp;&lt;/span&gt;&lt;span style=&quot;background-color: initial;&quot;&gt;HtmlElement;&lt;/span&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=&quot;height:2px;&quot;&gt;&lt;/div&gt;" style="verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;" vertex="1" parent="1">
          <mxGeometry x="-414" y="-270" width="430" height="170" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>

