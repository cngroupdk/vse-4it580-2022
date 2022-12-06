//
//  ListItemView.swift
//  SwiftUIDemo
//
//  Created by Tomáš Horáček on 06.12.2022.
//

import SwiftUI

struct ListItem {
    var id: String
    var name: String
}

struct ListItemView: View {
    var item: ListItem
    
    var body: some View {
        VStack {
            Text("Hello, \(item.name)!")
        }
        .background(Color.gray)
        .padding(8)
    }
}

struct ListItemView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            ListItemView(
                item: .init(id: "1", name: "World"))
            ListItemView(
                item: .init(id: "2", name: "VSE"))
        }
    }
}
